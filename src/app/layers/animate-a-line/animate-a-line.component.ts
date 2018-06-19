import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-animate-a-line',
    templateUrl: './animate-a-line.component.html',
    styleUrls: ['./animate-a-line.component.css']
})
export class AnimateALineComponent implements AfterViewInit {

    title = '';

    style = 'mapbox://styles/mapbox/streets-v10';
    center = [0, 0];
    zoom = 0.9;

    source = {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [{
                'type': 'Feature',
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        [0, 0]
                    ]
                }
            }]
        }
    };

    layout = {
        'line-cap': 'round',
        'line-join': 'round'
    };
    paint = {
        'line-color': '#ed6498',
        'line-width': 5,
        'line-opacity': 0.8
    };

    isPlaying = true;
    speedFactor = 30;
    animation: number;
    startTime = 0;
    progress = 0;
    resetTime = false;

    constructor(private route: ActivatedRoute) {
        this.title = route.snapshot.data['title'];
        this.startTime = performance.now();
    }

    ngAfterViewInit() {
        this.animateLine();
    }

    toggle() {
        if (this.isPlaying) {
            cancelAnimationFrame(this.animation);
        } else {
            this.resetTime = true;
            this.animateLine();
        }
        this.isPlaying = !this.isPlaying;
    }

    private animateLine(timestamp?: any) {
        if (this.resetTime) {
            this.startTime = performance.now() - this.progress;
            this.resetTime = false;
        } else {
            this.progress = timestamp - this.startTime;
        }

        if (this.progress > this.speedFactor * 360) {
            this.startTime = timestamp;
            this.source['data'].features[0].geometry.coordinates = [];
        } else {
            const x = this.progress / this.speedFactor;
            const y = Math.sin(x * Math.PI / 90) * 40;
            this.source['data'].features[0].geometry.coordinates.push([x, y]);
            this.source = {
                ...this.source,
            };
        }

        this.animation = requestAnimationFrame(this.animateLine.bind(this));
    }

}
