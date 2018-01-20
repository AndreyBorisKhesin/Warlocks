import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  sex = ['Female', 'Male'];
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

}
