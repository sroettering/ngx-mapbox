import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-create-and-style-clusters',
    templateUrl: './create-and-style-clusters.component.html',
    styleUrls: ['./create-and-style-clusters.component.css']
})
export class CreateAndStyleClustersComponent {

    title = '';

    style = 'mapbox://styles/mapbox/dark-v9';
    center = [-103.59179687498357, 40.66995747013945];
    zoom = 3;

    source = {
        'type': 'geojson',
        // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
        // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
        'data': '/assets/earthquakes.geojson',
        'cluster': true,
        'clusterMaxZoom': 14, // Max zoom to cluster points on
        'clusterRadius': 50 // Radius of each cluster when clustering points (defaults to 50)
    };

    clusteredPoint = {
        filter: ['has', 'point_count'],
        paint: {
            // Use step expressions (https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
            // with three steps to implement three types of circles:
            //   * Blue, 20px circles when point count is less than 100
            //   * Yellow, 30px circles when point count is between 100 and 750
            //   * Pink, 40px circles when point count is greater than or equal to 750
            'circle-color': [
                'step',
                ['get', 'point_count'],
                '#51bbd6',
                100,
                '#f1f075',
                750,
                '#f28cb1'
            ],
            'circle-radius': [
                'step',
                ['get', 'point_count'],
                20,
                100,
                30,
                750,
                40
            ]
        }
    };

    clusterCount = {
        filter: ['has', 'point_count'],
        layout: {
            'text-field': '{point_count_abbreviated}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12
        }
    };

    unclusteredPoint = {
        filter: ['!has', 'point_count'],
        paint: {
            'circle-color': '#11b4da',
            'circle-radius': 4,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff'
        }
    };

    constructor(private route: ActivatedRoute) {
        this.title = route.snapshot.data['title'];
    }

}
