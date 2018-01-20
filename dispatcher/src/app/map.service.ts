import { Injectable } from '@angular/core';
import { Marker } from './map/map.component';
import { MARKERS } from './mock-markers';

@Injectable()
export class MapService {
  constructor() { }

  getMarkers(): Marker[] {
      return MARKERS;
  }
}
