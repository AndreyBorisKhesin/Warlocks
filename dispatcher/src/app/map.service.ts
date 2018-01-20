import { Injectable } from '@angular/core';
import { Responder } from './classes';
import { Emergency } from './classes';

import { RESPONDERS } from './mock-responders';

import 'rxjs/add/operator/toPromise';

import { environment } from '../environments/environment';
import { Http } from '@angular/http';
import { OneString } from './classes';
import { Response } from '@angular/http';

@Injectable()
export class MapService {
  constructor(
    private http: Http
  ) { }

  getResponders(): Responder[] {
    return RESPONDERS;
  }

  /*
  * Get emergency address from 911 call, and send emergency to dispatchers through api
  * Return responder
  */
  startEmergency(em: Emergency): Promise<OneString> {
    let url = `${environment.api}/emergency/start`;
    let reqBody = em;
    console.log(reqBody);
    console.log(JSON.stringify(reqBody));
    return this.http.post(url, JSON.stringify(reqBody))
      .toPromise()
      .then(response => {
        console.log(response);
        response.json() as OneString;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred in mapService', error);
    return Promise.reject(error.message || error);
  }


}
