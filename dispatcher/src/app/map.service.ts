import { Injectable } from '@angular/core';
import { Responder } from './classes';
import { Emergency } from './classes';

import { RESPONDERS } from './mock-responders';

import 'rxjs/add/operator/toPromise';

import { environment } from '../environments/environment';

@Injectable()
export class MapService {
  constructor() { }

  getResponders(): Responder[] {
      return RESPONDERS;
  }

  /*
  * Get emergency address from 911 call, and send emergency to dispatchers through api
  * Return responder
  */
  // startEmergency(): Promise<Responder> {
  //
  // }

}
