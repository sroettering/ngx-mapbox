import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MAPBOX_ACCESS_TOKEN } from '../../projects/ngx-mapbox/src/lib/access-token';
import { NgxMapboxModule } from '../../projects/ngx-mapbox/src/lib/ngx-mapbox.module';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';
import { AddAGeneratedIconToTheMapComponent } from './styles/add-a-generated-icon-to-the-map/add-a-generated-icon-to-the-map.component';
import { AddANewLayerBelowLabelsComponent } from './layers/add-a-new-layer-below-labels/add-a-new-layer-below-labels.component';
import { DisplayBuildingsInThreeDComponent } from './layers/display-buildings-in-three-d/display-buildings-in-three-d.component';
import { AddAnIconToTheMapComponent } from './styles/add-an-icon-to-the-map/add-an-icon-to-the-map.component';

@NgModule({
    declarations: [
        AppComponent,
        AddANewLayerBelowLabelsComponent,
        DisplayBuildingsInThreeDComponent,
        TableOfContentsComponent,
        AddAGeneratedIconToTheMapComponent,
        AddAnIconToTheMapComponent
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
