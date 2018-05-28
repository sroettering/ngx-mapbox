import { Component, Input } from '@angular/core';

@Component({
    selector: 'mbox-image',
    templateUrl: './image.component.html'
})
export class ImageComponent {

    @Input()
    id: string;

    @Input() // TODO: remove any type if mapbox typing is updated
    image: any | string | HTMLImageElement | ImageData | { width: number, height: number, data: Uint8Array | Uint8ClampedArray };

    @Input()
    options: { pixelRatio?: any, sdf?: any };

    constructor() {
    }

}
