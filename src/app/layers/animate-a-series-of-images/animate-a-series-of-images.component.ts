import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-animate-a-series-of-images',
    templateUrl: './animate-a-series-of-images.component.html',
    styleUrls: ['./animate-a-series-of-images.component.css']
})
export class AnimateASeriesOfImagesComponent implements OnInit, OnDestroy {

    title = '';

    style = 'mapbox://styles/mapbox/dark-v9';
    center = [-75.789, 41.874];
    minzoom: 4;
    maxzoom: 5.99;
    zoom = 5;

    layers = [];

    currentFrame = 0;
    frameCount = 5;
    subscription: Subscription;

    constructor(route: ActivatedRoute) {
        this.title = route.snapshot.data['title'];
        for (let i = 0; i < this.frameCount; i++) {
            this.layers[i] = {
                source: this.createSource(i),
                paint: {
                    'raster-opacity': 0,
                    'raster-opacity-transition': {
                        duration: 0
                    }
                }
            };
        }
    }

    ngOnInit() {
        this.subscription = interval(300)
            .pipe(
                map(value => value % this.frameCount)
            )
            .subscribe(frame => this.setAnimationFrame(frame));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private setAnimationFrame(frame: number) {
        this.layers[this.currentFrame].paint = {
            'raster-opacity': 0,
            'raster-opacity-transition': {
                duration: 0
            }
        };
        this.currentFrame = frame;
        this.layers[this.currentFrame].paint = {
            'raster-opacity': 1,
            'raster-opacity-transition': {
                duration: 0
            }
        };
    }

    private createSource(imageIndex: number) {
        return {
            type: 'image',
            url: `/assets/radar${imageIndex}.gif`,
            coordinates: [
                [-80.425, 46.437],
                [-71.516, 46.437],
                [-71.516, 37.936],
                [-80.425, 37.936]
            ]
        };
    }

}
