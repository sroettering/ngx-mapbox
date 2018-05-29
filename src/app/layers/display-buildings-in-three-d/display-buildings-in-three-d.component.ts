import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapComponent } from '../../../../projects/ngx-mapbox/src/lib/map/map.component';

@Component({
    selector: 'app-display-buildings-in-three-d',
    templateUrl: './display-buildings-in-three-d.component.html',
    styleUrls: ['./display-buildings-in-three-d.component.css']
})
export class DisplayBuildingsInThreeDComponent implements AfterViewInit {

    title = '';

    style = 'mapbox://styles/mapbox/light-v9';
    center = [-74.0066, 40.7135];
    zoom = 15.5;
    pitch = 45;
    bearing = -17.6;

    filter = ['==', 'extrude', 'true'];
    paint = {
        'fill-extrusion-color': '#aaa',
        'fill-extrusion-height': [
            'interpolate', ['linear'], ['zoom'],
            15, 0,
            15.05, ['get', 'height']
        ],
        'fill-extrusion-base': [
            'interpolate', ['linear'], ['zoom'],
            15, 0,
            15.05, ['get', 'min_height']
        ],
        'fill-extrusion-opacity': 0.6
    };
    before: string;

    @ViewChild(MapComponent)
    map: MapComponent;

    constructor(route: ActivatedRoute) {
        this.title = route.snapshot.data['title'];
    }

    ngAfterViewInit() {
        const layers$ = this.map.allLayers;
        layers$.subscribe(
            layers => this.before = layers.filter(layer => layer.type === 'symbol' && !!layer.layout['text-field'])[0].id
        );
    }

}
