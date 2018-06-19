import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import {
    BackgroundLayout,
    BackgroundPaint,
    CircleLayout,
    CirclePaint,
    FillExtrusionLayout,
    FillExtrusionPaint,
    FillLayout,
    FillPaint,
    HeatmapLayout,
    HeatmapPaint,
    Layer,
    LineLayout,
    LinePaint,
    Map as MapboxMap,
    RasterLayout,
    RasterPaint,
    SymbolLayout,
    SymbolPaint
} from 'mapbox-gl';
import { MapElement } from '../map-element';

@Component({
    selector: 'mbox-layer',
    templateUrl: './layer.component.html',
    providers: [
        { provide: MapElement, useExisting: LayerComponent }
    ]
})
export class LayerComponent implements MapElement, OnChanges {

    @Input()
    id: string;

    @Input()
    type: 'fill' | 'line' | 'symbol' | 'circle' | 'fill-extrusion' | 'raster' | 'background' | 'heatmap';

    @Input()
    metadata: any;

    @Input()
    source: string;

    @Input()
    sourceLayer: string = '';

    _minzoom: number = 0;

    @Input()
    set minzoom(zoom: number) {
        if (zoom < 0 || zoom > 24) {
            throw new Error('Invalid minzoom. Allowed values are from 0 to 24 incl.');
        }
        this._minzoom = zoom;
    }

    _maxzoom: number = 24;

    @Input()
    set maxzoom(zoom: number) {
        if (zoom < 0 || zoom > 24) {
            throw new Error('Invalid maxzoom. Allowed values are from 0 to 24 incl.');
        }
        this._maxzoom = zoom;
    }

    @Input()
    filter: any[];

    @Input()
    layout: BackgroundLayout | FillLayout | FillExtrusionLayout | LineLayout | SymbolLayout | RasterLayout | CircleLayout | HeatmapLayout;

    @Input()
    paint: BackgroundPaint | FillPaint | FillExtrusionPaint | LinePaint | SymbolPaint | RasterPaint | CirclePaint | HeatmapPaint;

    @Input()
    before: string;

    private _layer: Layer;

    private _map: MapboxMap;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this._map && this.id) {
            if (changes['paint'] && !changes['paint'].firstChange) {
                this.changePaint(changes['paint']);
            }
            if (changes['layout'] && !changes['layout'].firstChange) {
                this.changeLayout(changes['layout']);
            }
        }
    }

    onInit(map: MapboxMap) {
        this._map = map;
        this._map.addLayer(this.layer, this.before);
    }

    onDestroy() {
        this._map = null;
        this._layer = null;
    }

    private get layer(): Layer {
        if (!this._layer) {
            this._layer = this.buildLayer();
        }
        return this._layer;
    }

    private changePaint(change: SimpleChange) {
        const paintChange = change.currentValue;
        Object.keys(paintChange).forEach(paintProp => {
            this._map.setPaintProperty(this.id, paintProp, paintChange[paintProp]);
        });
    }

    private changeLayout(change: SimpleChange) {
        const layoutChange = change.currentValue;
        Object.keys(layoutChange).forEach(layoutProp => {
            this._map.setLayoutProperty(this.id, layoutProp, layoutChange[layoutProp]);
        });
    }

    private buildLayer(): Layer {
        return Object.assign(
            this._layer || {},
            this.id && { id: this.id },
            this.type && { type: this.type },
            this.metadata && { metadata: this.metadata },
            this.source && { source: this.source },
            this.sourceLayer && { 'source-layer': this.sourceLayer },
            this._minzoom && { minzoom: this._minzoom },
            this._maxzoom && { maxzoom: this._maxzoom },
            this.filter && { filter: this.filter },
            this.layout && { layout: this.layout },
            this.paint && { paint: this.paint },
        );
    }

}
