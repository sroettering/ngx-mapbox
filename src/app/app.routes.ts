import { Routes } from '@angular/router';
import { LAYERS_ROUTES } from './layers/layers.routes';
import { STYLES_ROUTES } from './styles/styles.routes';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: TableOfContentsComponent,
    },
    {
        path: 'styles',
        children: STYLES_ROUTES,
    },
    {
        path: 'layers',
        children: LAYERS_ROUTES,
    },
];
