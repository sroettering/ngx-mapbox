import { Component } from '@angular/core';

@Component({
    selector: 'app-display-a-map',
    templateUrl: './display-a-map.component.html',
    styleUrls: ['./display-a-map.component.css']
})
export class DisplayAMapComponent {

    style = 'mapbox://styles/mapbox/streets-v9';
    center = [-74.50, 40];

    constructor() {
    }
}
