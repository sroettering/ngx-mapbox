import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-extrude-polygons-for-three-d-indoor-mapping',
    templateUrl: './extrude-polygons-for-three-d-indoor-mapping.component.html',
    styleUrls: ['./extrude-polygons-for-three-d-indoor-mapping.component.css']
})
export class ExtrudePolygonsForThreeDIndoorMappingComponent {

    title = '';

    style = 'mapbox://styles/mapbox/streets-v9';
    center = [-87.61694, 41.86625];
    zoom = 15.99;
    pitch = 40;
    bearing = 20;

    source = {
        type: 'geojson',
        data: '/assets/indoor-3d-map.geojson'
    };
    paint = {
        'fill-extrusion-color': ['get', 'color'],
        'fill-extrusion-height': ['get', 'height'],
        'fill-extrusion-base': ['get', 'base_height'],
        'fill-extrusion-opacity': 0.5
    };

    constructor(route: ActivatedRoute) {
        this.title = route.snapshot.data['title'];
    }

}
