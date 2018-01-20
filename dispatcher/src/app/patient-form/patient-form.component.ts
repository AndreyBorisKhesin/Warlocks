import { Component, OnInit } from '@angular/core';

import { Emergency } from '../classes';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  sex = ['Female', 'Male'];
  submitted = false;

  model = new Emergency('', '', '', 43.6595053, -79.3978192, '');

  // For testing
  get currentEmergency() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

  newEmergency() {
    // this.model = new Emergency('', '', '',  '');
    console.log(this.model.Name);
    return this.model;
  }

}
