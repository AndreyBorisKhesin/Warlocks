import { Component, OnInit } from '@angular/core';

import { Emergency } from '../classes';
import { ShareFormService } from '../share-form.service';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  sex = ['Female', 'Male'];

  model = new Emergency('', '', '', 43.6705053, -79.3978192, '', 1);

  // For testing
  get currentEmergency() { return JSON.stringify(this.model); }

  public constructor(
    private shareFormService: ShareFormService,
    private mapComp: MapComponent
    ) {
    this.shareFormService.getData(this.model);
  }

  ngOnInit() {
  }

  newEmergency() {
    console.log(this.model.Name);
    this.mapComp.mapStartEmergency(this.model);
    // return this.model;
  }

}
