import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-an-icon-to-the-map',
    templateUrl: './add-an-icon-to-the-map.component.html',
    styleUrls: ['./add-an-icon-to-the-map.component.css']
})
export class AddAnIconToTheMapComponent {

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
        'icon-image': 'cat',
        'icon-size': 0.25
    };

    imageSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png';

    constructor() {
    }

}
