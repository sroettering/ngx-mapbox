import { Routes } from '@angular/router';
import { AddANewLayerBelowLabelsComponent } from './add-a-new-layer-below-labels/add-a-new-layer-below-labels.component';
import { DisplayBuildingsInThreeDComponent } from './display-buildings-in-three-d/display-buildings-in-three-d.component';

export const LAYERS_ROUTES: Routes = [
    {
        path: 'add-a-new-layer-below-labels',
        component: AddANewLayerBelowLabelsComponent,
        data: {
            title: 'Add a new layer below labels'
        }
    },
    {
        path: 'display-buildings-in-three-d',
        component: DisplayBuildingsInThreeDComponent,
        data: {
            title: 'Display buildings in 3D'
        }
    }
];
