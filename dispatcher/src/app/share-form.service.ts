import { Injectable } from '@angular/core';
import { Emergency } from './classes';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShareFormService {

  // private myMethodSubject = new Subject<any>();
  private emergency: Emergency;

  constructor() {

  }

  getData(data) {
    this.emergency = data;
  }

  sharedata() {
    return this.emergency;
  }
}
