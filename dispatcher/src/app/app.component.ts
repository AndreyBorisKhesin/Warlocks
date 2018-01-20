import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title: string = 'Doctors within Borders';
  lat: number = 43.6595053;
  lng: number = -79.3978192;
  zoom: number = 13;
  sex = ['Female', 'Male'];
  submitted = false;
  onSubmit() { this.submitted = true; }

  markers: marker[] = [
	  {
		  lat: 43.6595053,
		  lng: -79.3978192,
		  label: 'M1'
	  },
	  {
		  lat: 43.6795053,
		  lng: -79.3778192,
		  label: 'M2'
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'M3'
	  }
  ]
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
}
