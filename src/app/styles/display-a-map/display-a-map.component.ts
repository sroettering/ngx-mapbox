import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-display-a-map',
    templateUrl: './display-a-map.component.html',
    styleUrls: ['./display-a-map.component.css']
})
export class DisplayAMapComponent {

    title = '';

    style = 'mapbox://styles/mapbox/streets-v9';
    center = [-74.50, 40];

    constructor(route: ActivatedRoute) {
        this.title = route.snapshot.data['title'];
    }
}
