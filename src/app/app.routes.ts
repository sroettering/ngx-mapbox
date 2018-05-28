import { Routes } from '@angular/router';
import { AddANewLayerBelowLabelsComponent } from './add-a-new-layer-below-labels/add-a-new-layer-below-labels.component';
import { DisplayBuildingsInThreeDComponent } from './display-buildings-in-three-d/display-buildings-in-three-d.component';

export const APP_ROUTES: Routes = [
    {
        path: 'add-a-new-layer-below-labels',
        component: AddANewLayerBelowLabelsComponent,
    },
    {
        path: 'display-buildings-in-three-d',
        component: DisplayBuildingsInThreeDComponent,
    }
];
