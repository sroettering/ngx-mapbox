import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxMapboxModule } from '../../projects/ngx-mapbox/src/lib/ngx-mapbox.module';
import { MAPBOX_ACCESS_TOKEN } from '../../projects/ngx-mapbox/src/lib/access-token';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxMapboxModule,
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
