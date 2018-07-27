import { Routes } from '@angular/router';
import { AddAGeneratedIconToTheMapComponent } from '../styles/add-a-generated-icon-to-the-map/add-a-generated-icon-to-the-map.component';
import { AddAnIconToTheMapComponent } from '../styles/add-an-icon-to-the-map/add-an-icon-to-the-map.component';
import { AddAGeojsonLineComponent } from './add-a-geojson-line/add-a-geojson-line.component';
import { AddAGeojsonPolygonComponent } from './add-a-geojson-polygon/add-a-geojson-polygon.component';
import { AddANewLayerBelowLabelsComponent } from './add-a-new-layer-below-labels/add-a-new-layer-below-labels.component';
import { AdjustALayersOpacityComponent } from './adjust-a-layers-opacity/adjust-a-layers-opacity.component';
import { AnimateALineComponent } from './animate-a-line/animate-a-line.component';
import { AnimateAPointComponent } from './animate-a-point/animate-a-point.component';
import { AnimateASeriesOfImagesComponent } from './animate-a-series-of-images/animate-a-series-of-images.component';
import { ChangeALayersColorWithButtonsComponent } from './change-a-layers-color-with-buttons/change-a-layers-color-with-buttons.component';
import { CreateAndStyleClustersComponent } from './create-and-style-clusters/create-and-style-clusters.component';
import { DisplayBuildingsInThreeDComponent } from './display-buildings-in-three-d/display-buildings-in-three-d.component';
import { ExtrudePolygonsForThreeDIndoorMappingComponent } from './extrude-polygons-for-three-d-indoor-mapping/extrude-polygons-for-three-d-indoor-mapping.component';
import { StyleCirclesWithADataDrivenPropertyComponent } from './style-circles-with-a-data-driven-property/style-circles-with-a-data-driven-property.component';
import { StyleLinesWithADataDrivenPropertyComponent } from './style-lines-with-a-data-driven-property/style-lines-with-a-data-driven-property.component';

export const LAYERS_ROUTES: Routes = [
    {
        path: 'add-a-generated-icon-to-the-map',
        component: AddAGeneratedIconToTheMapComponent,
        data: {
            title: 'Add a generated icon to the map'
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
        path: 'add-an-icon-to-the-map',
        component: AddAnIconToTheMapComponent,
        data: {
            title: 'Add an icon to the map'
        }
    },
    {
        path: 'adjust-a-layers-opacity',
        component: AdjustALayersOpacityComponent,
        data: {
            title: 'Adjust a layer\'s opacity'
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
        path: 'display-buildings-in-three-d',
        component: DisplayBuildingsInThreeDComponent,
        data: {
            title: 'Display buildings in 3D'
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
        path: 'animate-a-point',
        component: AnimateAPointComponent,
        data: {
            title: 'Animate a point'
        }
    },
    {
        path: 'create-and-style-clusters',
        component: CreateAndStyleClustersComponent,
        data: {
            title: 'Create and style clusters'
        }
    },
    {
        path: 'change-a-layers-color-with-buttons',
        component: ChangeALayersColorWithButtonsComponent,
        data: {
            title: 'Change a layer\'s color with buttons'
        }
    },
    {
        path: 'style-circles-with-a-data-driven-property',
        component: StyleCirclesWithADataDrivenPropertyComponent,
        data: {
            title: 'Style circles with a data-driven property'
        }
    },
    {
        path: 'style-lines-with-a-data-driven-property',
        component: StyleLinesWithADataDrivenPropertyComponent,
        data: {
            title: 'Style lines with a data-driven property'
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
        path: 'add-a-geojson-line',
        component: AddAGeojsonLineComponent,
        data: {
            title: 'Add a GeoJSON line'
        }
    },
    {
        path: 'add-a-geojson-polygon',
        component: AddAGeojsonPolygonComponent,
        data: {
            title: 'Add a GeoJSON polygon'
        }
    },
];
