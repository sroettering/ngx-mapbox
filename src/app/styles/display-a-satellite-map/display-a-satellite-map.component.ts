import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-display-a-satellite-map',
    templateUrl: './display-a-satellite-map.component.html',
    styleUrls: ['./display-a-satellite-map.component.css']
})
export class DisplayASatelliteMapComponent {

    title = '';

    style = 'mapbox://styles/mapbox/satellite-v9';
    center = [137.9150899566626, 36.25956997955441];

    constructor(route: ActivatedRoute) {
        this.title = route.snapshot.data['title'];
    }
}
