import { Routes } from '@angular/router';
import { AddANewLayerBelowLabelsComponent } from './add-a-new-layer-below-labels/add-a-new-layer-below-labels.component';
import { AdjustALayersOpacityComponent } from './adjust-a-layers-opacity/adjust-a-layers-opacity.component';
import { AnimateALineComponent } from './animate-a-line/animate-a-line.component';
import { AnimateASeriesOfImagesComponent } from './animate-a-series-of-images/animate-a-series-of-images.component';
import { DisplayBuildingsInThreeDComponent } from './display-buildings-in-three-d/display-buildings-in-three-d.component';
import { ExtrudePolygonsForThreeDIndoorMappingComponent } from './extrude-polygons-for-three-d-indoor-mapping/extrude-polygons-for-three-d-indoor-mapping.component';

export const LAYERS_ROUTES: Routes = [
    {
        path: 'display-buildings-in-three-d',
        component: DisplayBuildingsInThreeDComponent,
        data: {
            title: 'Display buildings in 3D'
        }
    },
    {
        path: 'extrude-polygons-for-three-d-indoor-mappring',
        component: ExtrudePolygonsForThreeDIndoorMappingComponent,
        data: {
            title: 'Extrude polygons for 3D indoor mapping'
        }
    },
    {
        path: 'add-a-new-layer-below-labels',
        component: AddANewLayerBelowLabelsComponent,
        data: {
            title: 'Add a new layer below labels'
        }
    },
    {
        path: 'animate-a-series-of-images',
        component: AnimateASeriesOfImagesComponent,
        data: {
            title: 'Animate a series of images'
        }
    },
    {
        path: 'animate-a-line',
        component: AnimateALineComponent,
        data: {
            title: 'Animate a line'
        }
    },
    {
        path: 'adjust-a-layers-opacity',
        component: AdjustALayersOpacityComponent,
        data: {
            title: 'Adjust a layer\'s opacity'
        }
    },
];
