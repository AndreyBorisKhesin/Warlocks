import { Injectable } from '@angular/core';
import { Responder, Emergency } from './classes';

import { RESPONDERS } from './mock-responders';

import 'rxjs/add/operator/toPromise';

import { environment } from '../environments/environment';
import { Http, Headers, RequestOptions} from '@angular/http';
import { OneString } from './classes';
import { Response } from '@angular/http';

@Injectable()
export class MapService {

  constructor(private http: Http) {}

  getResponders(): Responder[] {
    return RESPONDERS;
  }

  /*
  * Get emergency address from 911 call, and send emergency to dispatchers through api
  * Return responder
  */
  startEmergency(em: Emergency): Promise<Responder> {
    let url = `${environment.api}/emergency/start`;
    let headers = new Headers({
      'Content-Type': 'application/json',
   });
    let options = new RequestOptions({ headers: headers });
    // let doc = new Doctor();
    return this.http.post(url, JSON.stringify(em), options)
      .toPromise()
      .then(response => {
        console.log("in map service");
        let doc = new Responder(
          response.json()['id'],
          response.json()['name'],
          response.json()['skills'],
          response.json()['lat'],
          response.json()['lng']
        );
        return doc;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred in mapService', error);
    return Promise.reject(error.message || error);
  }



}
