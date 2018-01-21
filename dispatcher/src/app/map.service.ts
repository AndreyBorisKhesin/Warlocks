import { Injectable } from '@angular/core';
import { Responder, Emergency } from './classes';

import 'rxjs/add/operator/toPromise';

import { environment } from '../environments/environment';
import { Http, Headers, RequestOptions } from '@angular/http';
import { OneString } from './classes';
import { Response } from '@angular/http';

@Injectable()
export class MapService {

  constructor(private http: Http) { }

  // getResponders(): Responder[] {
  //   return RESPONDERS;
  // }

  /*
  * Get emergency address from 911 call, and send emergency to dispatchers through api
  * Return all responders that are on duty
  */
  startEmergency(em: Emergency): Promise<Responder[]> {
    let url = `${environment.api}/emergency/start`;
    let headers = new Headers({
      'Content-Type': 'application/json',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, JSON.stringify(em), options)
      .toPromise()
      .then(response => {
        let doctors = [];
        console.log("in map service");
        console.log(response.json());
        let len = Object.keys(response.json()).length;
        for (let i = 0; i < len; i++) {
          let doc = new Responder(
            response.json()[i]['id'],
            response.json()[i]['name'],
            response.json()[i]['skills'],
            response.json()[i]['lat'],
            response.json()[i]['lng']
          );
          doctors[i] = doc;
        }
        return doctors;
      })
      .catch(this.handleError);
  }

  /*
  * Send the list of Ids in sorted order, closest to em first
  */
  SendClosestResponders(Sorted: {}): void {
    let url = `${environment.api}/closest`;
    let headers = new Headers({
      'Content-Type': 'application/json',
    });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, JSON.stringify(Sorted), options)
      .toPromise()
      .then(response => {console.log("Closest received")});
  }

  /*
  * Poll for information on the dispatched doctor
  */
  PollForDispatched(): Promise<string> {
    let url = `${environment.api}/dispatcherpoll`;
    let headers = new Headers({
      'Content-Type': 'application/json',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, options)
    .toPromise()
    .then( response => {
      console.log("in map service, dispatched id is " + response.json()['id']);
      console.log(response.json());
      let ret = response.json()['id'];
      return ret;
    });

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred in mapService', error);
    return Promise.reject(error.message || error);
  }



}
