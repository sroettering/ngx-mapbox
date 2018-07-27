import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-style-circles-with-a-data-driven-property',
    templateUrl: './style-circles-with-a-data-driven-property.component.html',
    styleUrls: ['./style-circles-with-a-data-driven-property.component.css']
})
export class StyleCirclesWithADataDrivenPropertyComponent {

    title = '';

    style = 'mapbox://styles/mapbox/light-v9';
    center = [-122.447303, 37.753574];
    zoom = 12;

    source = {
        'type': 'vector',
        'url': 'mapbox://examples.8fgz4egr'
    };

    paint = {
        'circle-radius': {
            'base': 1.75,
            'stops': [[12, 2], [22, 180]]
        },
        // color circles by ethnicity, using a match expression
        // https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
        'circle-color': [
            'match',
            ['get', 'ethnicity'],
            'White', '#fbb03b',
            'Black', '#223b53',
            'Hispanic', '#e55e5e',
            'Asian', '#3bb2d0',
            /* other */ '#ccc'
        ]
    };

    constructor(private route: ActivatedRoute) {
        this.title = route.snapshot.data['title'];
    }

}
