import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';
import { LayerComponent } from './layer/layer.component';

@NgModule({
    imports: [],
    declarations: [MapComponent, LayerComponent],
    exports: [MapComponent, LayerComponent]
})
export class NgxMapboxModule {
}
