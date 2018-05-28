import { Component, ViewChild } from '@angular/core';
import { MapComponent } from '../../../../projects/ngx-mapbox/src/lib/map/map.component';

@Component({
    selector: 'app-add-a-generated-icon-to-the-map',
    templateUrl: './add-a-generated-icon-to-the-map.component.html',
    styleUrls: ['./add-a-generated-icon-to-the-map.component.css']
})
export class AddAGeneratedIconToTheMapComponent {

    style = 'mapbox://styles/mapbox/streets-v9';

    source = {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: [{
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [0, 0],
                },
            }],
        },
    };
    layout = {
        'icon-image': 'gradient',
    };

    image: any;

    @ViewChild(MapComponent)
    map: MapComponent;

    constructor() {
        const width = 64; // The image will be 64 pixels square
        const bytesPerPixel = 4; // Each pixel is represented by 4 bytes: red, green, blue, and alpha.
        const data = new Uint8Array(width * width * bytesPerPixel);

        for (let x = 0; x < width; x++) {
            for (let y = 0; y < width; y++) {
                const offset = (y * width + x) * bytesPerPixel;
                data[offset] = y / width * 255; // red
                data[offset + 1] = x / width * 255; // green
                data[offset + 2] = 128;             // blue
                data[offset + 3] = 255;             // alpha
            }
        }

        this.image = { width, height: width, data };
    }

}
