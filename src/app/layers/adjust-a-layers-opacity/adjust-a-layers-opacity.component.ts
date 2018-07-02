import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-adjust-a-layers-opacity',
    templateUrl: './adjust-a-layers-opacity.component.html',
    styleUrls: ['./adjust-a-layers-opacity.component.css']
})
export class AdjustALayersOpacityComponent {

    title = '';

    style = 'mapbox://styles/mapbox/light-v9';
    center = [-87.6321, 41.8362];
    zoom = 9.5;
    minZoom = 9.5;
    maxZoom = 13;

    opacity = 100;

    source = {
        'type': 'raster',
        'url': 'mapbox://mapbox.u8yyzaor'
    };
    paint = {
        'raster-opacity': this.opacity / 100,
    };

    constructor(private route: ActivatedRoute) {
        this.title = route.snapshot.data['title'];
    }

    changeOpacity(event) {
        this.opacity = parseInt(event.target.value, 10);
        this.paint = {
            ...this.paint,
            'raster-opacity': this.opacity / 100,
        };
    }

}
