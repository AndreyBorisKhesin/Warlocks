import { Component, OnInit } from '@angular/core';

import { Patient } from '../patient.model';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  sex = ['Female', 'Male'];
  submitted = false;

  model = new Patient('', '', 0, '');

  // For testing
  get currentPatient() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

}
