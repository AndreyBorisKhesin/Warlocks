import { Injectable } from '@angular/core';
import { Marker } from './map/map.component';
import { Responder } from './classes';
import { Emergency } from './classes';

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

  /*
  * Get emergency address from 911 call, and send emergency to dispatchers through api
  */
  startEmergency(): void {

  }

}
