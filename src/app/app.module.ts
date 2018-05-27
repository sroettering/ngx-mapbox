import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxMapboxModule } from '../../projects/ngx-mapbox/src/lib/ngx-mapbox.module';
import { MAPBOX_ACCESS_TOKEN } from '../../projects/ngx-mapbox/src/lib/access-token';
import { AddANewLayerBelowLabelsComponent } from './add-a-new-layer-below-labels/add-a-new-layer-below-labels.component';
import { RouterModule } from '@angular/router';
import { APP_ROOT } from '@angular/core/src/di/scope';
import { APP_ROUTES } from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        AddANewLayerBelowLabelsComponent
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
