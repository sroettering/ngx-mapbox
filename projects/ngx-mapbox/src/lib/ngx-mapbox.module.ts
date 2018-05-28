import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';
import { LayerComponent } from './layer/layer.component';
import { ImageComponent } from './image/image.component';

@NgModule({
    imports: [],
    declarations: [MapComponent, LayerComponent, ImageComponent],
    exports: [MapComponent, LayerComponent, ImageComponent]
})
export class NgxMapboxModule {
}
