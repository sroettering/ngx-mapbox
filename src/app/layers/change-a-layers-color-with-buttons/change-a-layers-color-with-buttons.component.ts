import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapComponent } from '../../../../projects/ngx-mapbox/src/lib/map/map.component';

@Component({
    selector: 'app-change-a-layers-color-with-buttons',
    templateUrl: './change-a-layers-color-with-buttons.component.html',
    styleUrls: ['./change-a-layers-color-with-buttons.component.css']
})
export class ChangeALayersColorWithButtonsComponent {

    title = '';

    style = 'mapbox://styles/mapbox/light-v9';
    center = [12.338, 45.4385];
    zoom = 17.4;

    colors = [
        '#ffffcc',
        '#a1dab4',
        '#41b6c4',
        '#2c7fb8',
        '#253494',
        '#fed976',
        '#feb24c',
        '#fd8d3c',
        '#f03b20',
        '#bd0026'
    ];

    selectedLayer = 'water';

    @ViewChild(MapComponent)
    mapComponent: MapComponent;

    constructor(route: ActivatedRoute) {
        this.title = route.snapshot.data['title'];
    }

    setColor(color: string) {
        this.mapComponent.map.subscribe(map => map.setPaintProperty(this.selectedLayer, 'fill-color', color));
    }

}
