import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MAPBOX_ACCESS_TOKEN } from '../../projects/ngx-mapbox/src/lib/access-token';
import { NgxMapboxModule } from '../../projects/ngx-mapbox/src/lib/ngx-mapbox.module';
import { AddANewLayerBelowLabelsComponent } from './add-a-new-layer-below-labels/add-a-new-layer-below-labels.component';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { DisplayBuildingsInThreeDComponent } from './display-buildings-in-three-d/display-buildings-in-three-d.component';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';

@NgModule({
    declarations: [
        AppComponent,
        AddANewLayerBelowLabelsComponent,
        DisplayBuildingsInThreeDComponent,
        TableOfContentsComponent
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
