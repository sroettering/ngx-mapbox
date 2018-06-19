import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
        if (this._map && this.id && changes['paint']) {
            // console.log(changes['paint'].currentValue);
        }
    }

    setMap(map: MapboxMap) {
        this._map = map;
        this._map.addLayer(this.layer, this.before);
    }

    private get layer(): Layer {
        if (!this._layer) {
            this._layer = this.buildLayer();
        }
        return this._layer;
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
