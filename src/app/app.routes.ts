import { Routes } from '@angular/router';
import { AddANewLayerBelowLabelsComponent } from './layers/add-a-new-layer-below-labels/add-a-new-layer-below-labels.component';
import { DisplayBuildingsInThreeDComponent } from './layers/display-buildings-in-three-d/display-buildings-in-three-d.component';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';
import { AddAGeneratedIconToTheMapComponent } from './styles/add-a-generated-icon-to-the-map/add-a-generated-icon-to-the-map.component';
import { AddAnIconToTheMapComponent } from './styles/add-an-icon-to-the-map/add-an-icon-to-the-map.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: TableOfContentsComponent,
    },
    {
        path: 'styles',
        children: [
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
        ]
    },
    {
        path: 'layers',
        children: [
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
        ],
    },
];
