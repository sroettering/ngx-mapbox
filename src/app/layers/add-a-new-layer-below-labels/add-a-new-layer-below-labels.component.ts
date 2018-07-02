import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MapComponent } from '../../../../projects/ngx-mapbox/src/lib/map/map.component';

@Component({
    selector: 'app-add-a-new-layer-below-labels',
    templateUrl: './add-a-new-layer-below-labels.component.html',
    styleUrls: ['./add-a-new-layer-below-labels.component.css']
})
export class AddANewLayerBelowLabelsComponent implements AfterViewInit {

    title = '';

    center = [-88.13734351262877, 35.137451890638886];

    zoom = 4;

    source = {
        'type': 'geojson',
        'data': 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson'
    };

    layout = {};

    paint = {
        'fill-color': '#f08',
        'fill-opacity': 0.4
    };

    before: string;

    @ViewChild(MapComponent)
    mapComponent: MapComponent;

    constructor(route: ActivatedRoute) {
        this.title = route.snapshot.data['title'];
    }

    ngAfterViewInit() {
        this.mapComponent.map
            .pipe(
                map(mapboxMap => mapboxMap.getStyle().layers)
            )
            .subscribe(
                layers => this.before = layers.filter(layer => layer.type === 'symbol')[0].id
            );
    }

}
