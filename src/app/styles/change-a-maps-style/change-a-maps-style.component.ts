import { Component } from '@angular/core';

@Component({
    selector: 'app-change-a-maps-style',
    templateUrl: './change-a-maps-style.component.html',
    styleUrls: ['./change-a-maps-style.component.css']
})
export class ChangeAMapsStyleComponent {

    style = 'mapbox://styles/mapbox/basic-v9';
    center = [4.899, 52.372];

    constructor() {
    }

    changeStyle(styleId: string) {
        this.style = `mapbox://styles/mapbox/${styleId}-v9`;
    }

}
