import { Injectable } from '@angular/core';
import { Marker } from './map/map.component';
import { Responder } from './responder';

import { MARKERS } from './mock-markers';
import { RESPONDERS } from './mock-responders';

import 'rxjs/add/operator/toPromise';

import { environment } from '../environments/environment';

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
