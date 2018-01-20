import { Injectable } from '@angular/core';
import { Marker } from './map/map.component';
import { Responder } from './responder';

import { MARKERS } from './mock-markers';
import { RESPONDERS } from './mock-responders';

@Injectable()
export class MapService {
  constructor() { }

  getMarkers(): Marker[] {
      return MARKERS;
  }

  getResponders(): Responder[] {
      return RESPONDERS;
  }
}
