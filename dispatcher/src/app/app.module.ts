import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MapService } from './map.service';

import { AgmCoreModule, MapsAPILoader, NoOpMapsAPILoader } from '@agm/core';
import { MapComponent } from './map/map.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { } from '@types/googlemaps';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_szadTrwGStDYgHDkCULZmZ9jls15LaU',
      libraries: ['geometry']
    }),
    HttpClientModule,
    HttpModule
  ],
  providers: [
    MapService,
    HttpClientModule
  ],
  declarations: [AppComponent, MapComponent, PatientFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
