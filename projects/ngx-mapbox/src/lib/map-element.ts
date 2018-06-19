import { Map as MapboxMap } from 'mapbox-gl';

export abstract class MapElement {
    abstract onInit(map: MapboxMap): void;

    abstract onDestroy(): void;
}
