import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-add-an-icon-to-the-map',
    templateUrl: './add-an-icon-to-the-map.component.html',
    styleUrls: ['./add-an-icon-to-the-map.component.css']
})
export class AddAnIconToTheMapComponent {

    title = '';

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

    constructor(route: ActivatedRoute) {
        this.title = route.snapshot.data['title'];
    }

}
