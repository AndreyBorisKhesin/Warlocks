import { Component, OnInit } from '@angular/core';

import { Emergency } from '../classes';
import { ShareFormService } from '../share-form.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  sex = ['Female', 'Male'];

  model = new Emergency('', '', '', 43.6595053, -79.3978192, '');

  // For testing
  get currentEmergency() { return JSON.stringify(this.model); }

  public constructor(private shareFormService: ShareFormService) {
    this.shareFormService.getData(this.model);
  }

  ngOnInit() {
  }

  newEmergency() {
    // this.model = new Emergency('', '', '',  '');
    console.log(this.model.Name);
    return this.model;
  }

}
