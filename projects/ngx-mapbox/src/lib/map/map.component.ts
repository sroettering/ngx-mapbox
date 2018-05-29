import {
    AfterViewInit,
    Component,
    ContentChildren,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    QueryList,
    SimpleChanges
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { LngLatBoundsLike, LngLatLike, Map as MapboxMap } from 'mapbox-gl';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { MAPBOX_ACCESS_TOKEN } from '../access-token';
import { ImageComponent } from '../image/image.component';
import { LayerComponent } from '../layer/layer.component';
import Layer = mapboxgl.Layer;

@Component({
    selector: 'mbox-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnDestroy, OnInit, OnChanges, AfterViewInit {

    @Input()
    minZoom: number = 0;

    @Input()
    maxZoom: number = 22;

    @Input()
    style: string = 'mapbox://styles/mapbox/streets-v9';

    @Input()
    hash: boolean = false;

    @Input()
    interactive: boolean = true;

    @Input()
    bearingSnap: number = 7;

    @Input()
    pitchWithRotate: boolean = true;

    @Input()
    attributionControl: boolean = true;

    @Input()
    logoPosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'bottom-left';

    @Input()
    failIfMajorPerformanceCaveat: boolean = false;

    @Input()
    preserveDrawingBuffer: boolean = false;

    @Input()
    refreshExpiredTiles: boolean = true;

    @Input()
    maxBounds: LngLatBoundsLike;

    @Input()
        // TODO: add Object to type
    scrollZoom: boolean = true;

    @Input()
    boxZoom: boolean = true;

    @Input()
    dragRotate: boolean = true;

    @Input()
    dragPan: boolean = true;

    @Input()
    keyboard: boolean = true;

    @Input()
    doubleClickZoom: boolean = true;

    @Input()
        // TODO: add Object to type
    touchZoomRotate: boolean = true;

    @Input()
    trackResize: boolean = true;

    @Input()
    center: LngLatLike = [0, 0];

    @Input()
    zoom: number = 0;

    @Input()
    bearing: number = 0;

    @Input()
    pitch: number = 0;

    @Input()
    renderWorldCopies: boolean = true;

    @Input()
    maxTileCacheSize: number = null;

    @Input()
    localIdeographFontFamily: string = null;

    @Input()
        // TODO: fix typing
    transformRequest: (url: string, resourceType?: string) => Object = null;

    @Input()
    collectResourceTiming: boolean = false;

    @ContentChildren(LayerComponent)
    layers: QueryList<LayerComponent>;

    @ContentChildren(ImageComponent)
    images: QueryList<ImageComponent>;

    private _loaded$ = new BehaviorSubject<boolean>(false);

    private _map: MapboxMap;

    constructor(@Inject(MAPBOX_ACCESS_TOKEN) private accessToken: string) {
        if (!accessToken) {
            throw new Error('No mapbox access token provided');
        }
        (mapboxgl as any).accessToken = accessToken;
    }

    ngOnInit() {
        this.createMapboxMap();
        fromEvent(this._map, 'load')
            .subscribe(() => this._loaded$.next(true));
    }

    ngAfterViewInit() {
        // TODO: introduce a decorator for this stuff
        this._loaded$.pipe(first(value => value)).subscribe(() => {
            this.addAllLayersToMap();
            this.addAllImagesToMap();
        });
    }

    ngOnDestroy() {
        // TODO: check if this throws errors while loading styles
        this._map.remove();
    }

    ngOnChanges(changes: SimpleChanges) {
        // TODO: do we have to handle more changes?
        if (changes['style'] && !changes['style'].firstChange) {
            this._map.setStyle(this.style);
        }
    }

    get allLayers(): Observable<Layer[]> {
        // TODO: introduce a decorator for this stuff
        return this._loaded$
            .pipe(
                first(value => value),
                map(() => this._map.getStyle().layers)
            );
    }

    private addAllLayersToMap() {
        this.layers.forEach(layerComponent =>
            this._map.addLayer(layerComponent.getLayer(), layerComponent.getBefore()));
    }

    private addAllImagesToMap() {
        this.images.forEach(imageComponent => {
            const { id, image, options } = imageComponent;
            if (typeof image === 'string') {
                this._map.loadImage(image, (error, loadedImg) => {
                    if (error) {
                        throw error;
                    }
                    this._map.addImage(id, loadedImg, options);
                });
            } else {
                this._map.addImage(id, <any>image, options);
            }
        });
    }

    private createMapboxMap() {
        this._map = new MapboxMap({
            container: 'mbox-map',
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            style: this.style,
            hash: this.hash,
            interactive: this.interactive,
            bearingSnap: this.bearingSnap,
            // pitchWithRotate: this.pitchWithRotate, // TODO: does not exist in 0.44.x
            attributionControl: this.attributionControl,
            logoPosition: this.logoPosition,
            failIfMayorPerformanceCaveat: this.failIfMajorPerformanceCaveat, // TODO: typo in option key
            preserveDrawingBuffer: this.preserveDrawingBuffer,
            refreshExpiredTiles: this.refreshExpiredTiles,
            maxBounds: this.maxBounds,
            scrollZoom: this.scrollZoom,
            boxZoom: this.boxZoom,
            dragRotate: this.dragRotate,
            dragPan: this.dragPan,
            keyboard: this.keyboard,
            doubleClickZoom: this.doubleClickZoom,
            touchZoomRotate: this.touchZoomRotate,
            trackResize: this.trackResize,
            center: this.center,
            zoom: this.zoom,
            bearing: this.bearing,
            pitch: this.pitch,
            renderWorldCopies: this.renderWorldCopies,
            maxTileCacheSize: this.maxTileCacheSize,
            // localIdeographFontFamily: this.localIdeographFontFamily, // TODO: does not exist in 0.44.x
            // transformRequest: this.transformRequest, // TODO: does not exist in 0.44.x
            // collectResourceTiming: this.collectResourceTiming, // TODO: does not exist in 0.44.x
        });
        // fix for not loading correctly in IE11
        this._map.setStyle(this.style);
    }

}
