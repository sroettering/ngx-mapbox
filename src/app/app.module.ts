import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MAPBOX_ACCESS_TOKEN } from '../../projects/ngx-mapbox/src/lib/access-token';
import { NgxMapboxModule } from '../../projects/ngx-mapbox/src/lib/ngx-mapbox.module';
import { ApiComponent } from './api/api.component';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { AddANewLayerBelowLabelsComponent } from './layers/add-a-new-layer-below-labels/add-a-new-layer-below-labels.component';
import { AnimateALineComponent } from './layers/animate-a-line/animate-a-line.component';
import { AnimateASeriesOfImagesComponent } from './layers/animate-a-series-of-images/animate-a-series-of-images.component';
import { DisplayBuildingsInThreeDComponent } from './layers/display-buildings-in-three-d/display-buildings-in-three-d.component';
import { ExtrudePolygonsForThreeDIndoorMappingComponent } from './layers/extrude-polygons-for-three-d-indoor-mapping/extrude-polygons-for-three-d-indoor-mapping.component';
import { PageComponent } from './page/page.component';
import { AddAGeneratedIconToTheMapComponent } from './styles/add-a-generated-icon-to-the-map/add-a-generated-icon-to-the-map.component';
import { AddAnIconToTheMapComponent } from './styles/add-an-icon-to-the-map/add-an-icon-to-the-map.component';
import { ChangeAMapsStyleComponent } from './styles/change-a-maps-style/change-a-maps-style.component';
import { DisplayAMapWithACustomStyleComponent } from './styles/display-a-map-with-a-custom-style/display-a-map-with-a-custom-style.component';
import { DisplayAMapComponent } from './styles/display-a-map/display-a-map.component';
import { DisplayASatelliteMapComponent } from './styles/display-a-satellite-map/display-a-satellite-map.component';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';
import { AdjustALayersOpacityComponent } from './layers/adjust-a-layers-opacity/adjust-a-layers-opacity.component';

@NgModule({
    declarations: [
        AppComponent,
        AddANewLayerBelowLabelsComponent,
        DisplayBuildingsInThreeDComponent,
        TableOfContentsComponent,
        AddAGeneratedIconToTheMapComponent,
        AddAnIconToTheMapComponent,
        DisplayAMapWithACustomStyleComponent,
        DisplayASatelliteMapComponent,
        ChangeAMapsStyleComponent,
        DisplayAMapComponent,
        ExtrudePolygonsForThreeDIndoorMappingComponent,
        PageComponent,
        ApiComponent,
        AnimateASeriesOfImagesComponent,
        AnimateALineComponent,
        AdjustALayersOpacityComponent,
    ],
    imports: [
        BrowserModule,
        NgxMapboxModule,
        RouterModule.forRoot(APP_ROUTES),
    ],
    providers: [
        {
            provide: MAPBOX_ACCESS_TOKEN,
            useValue: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
