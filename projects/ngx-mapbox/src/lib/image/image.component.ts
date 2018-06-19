import { Component, Input } from '@angular/core';
import { Map as MapboxMap } from 'mapbox-gl';
import { MapElement } from '../map-element';

@Component({
    selector: 'mbox-image',
    templateUrl: './image.component.html',
    providers: [
        { provide: MapElement, useExisting: ImageComponent }
    ]
})
export class ImageComponent implements MapElement {

    @Input()
    id: string;

    @Input() // TODO: remove any type if mapbox typing is updated
    image: string | HTMLImageElement | ImageData | { width: number, height: number, data: Uint8Array | Uint8ClampedArray };

    @Input()
    options: { pixelRatio?: any, sdf?: any };

    _map: MapboxMap;

    constructor() {
    }

    onInit(map: MapboxMap) {
        this._map = map;
        this.addImageToMap();
    }

    onDestroy() {
        this._map = null;
    }

    private addImageToMap() {
        if (typeof this.image === 'string') {
            this._map.loadImage(this.image, (error, loadedImg) => {
                if (error) {
                    throw error;
                }
                this._map.addImage(this.id, loadedImg, this.options);
            });
        } else {
            this._map.addImage(this.id, <any>this.image, this.options);
        }
    }

}
