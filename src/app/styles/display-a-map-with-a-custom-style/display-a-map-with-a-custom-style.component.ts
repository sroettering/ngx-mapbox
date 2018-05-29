import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-display-a-map-with-a-custom-style',
    templateUrl: './display-a-map-with-a-custom-style.component.html',
    styleUrls: ['./display-a-map-with-a-custom-style.component.css']
})
export class DisplayAMapWithACustomStyleComponent {

    title = '';

    style = 'mapbox://styles/mapbox/dark-v9';
    center = [-77.38, 39];

    constructor(route: ActivatedRoute) {
        this.title = route.snapshot.data['title'];
    }
}
