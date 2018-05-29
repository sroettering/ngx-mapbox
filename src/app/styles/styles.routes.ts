import { Routes } from '@angular/router';
import { AddAGeneratedIconToTheMapComponent } from './add-a-generated-icon-to-the-map/add-a-generated-icon-to-the-map.component';
import { AddAnIconToTheMapComponent } from './add-an-icon-to-the-map/add-an-icon-to-the-map.component';
import { ChangeAMapsStyleComponent } from './change-a-maps-style/change-a-maps-style.component';
import { DisplayAMapWithACustomStyleComponent } from './display-a-map-with-a-custom-style/display-a-map-with-a-custom-style.component';
import { DisplayAMapComponent } from './display-a-map/display-a-map.component';
import { DisplayASatelliteMapComponent } from './display-a-satellite-map/display-a-satellite-map.component';

export const STYLES_ROUTES: Routes = [
    {
        path: 'add-a-generated-icon-to-the-map',
        component: AddAGeneratedIconToTheMapComponent,
        data: {
            title: 'Add a generated icon to the map'
        }
    },
    {
        path: 'add-an-icon-to-the-map',
        component: AddAnIconToTheMapComponent,
        data: {
            title: 'Add an icon to the map'
        }
    },
    {
        path: 'display-a-map-with-a-custom-style',
        component: DisplayAMapWithACustomStyleComponent,
        data: {
            title: 'Display a map with a custom style'
        }
    },
    {
        path: 'display-a-satellite-map',
        component: DisplayASatelliteMapComponent,
        data: {
            title: 'Display a satellite map'
        }
    },
    {
        path: 'change-a-maps-style',
        component: ChangeAMapsStyleComponent,
        data: {
            title: 'Change a map\'s style'
        }
    },
    {
        path: 'display-a-map',
        component: DisplayAMapComponent,
        data: {
            title: 'Display a map'
        }
    },
];
