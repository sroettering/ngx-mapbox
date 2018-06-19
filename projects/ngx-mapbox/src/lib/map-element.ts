import { Map as MapboxMap } from 'mapbox-gl';

export abstract class MapElement {
    abstract setMap(map: MapboxMap): void;
}
