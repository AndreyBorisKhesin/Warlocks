import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import {
	GoogleMaps,
	GoogleMap,
	GoogleMapsEvent,
	GoogleMapOptions,
	CameraPosition,
	MarkerOptions,
	Marker
} from '@ionic-native/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

declare var google;

@Component({
	selector: 'page-go',
	templateUrl: 'go.html'
})
export class GoPage {
	lat: number;
	lon: number;
	dest: any;
	map: any;
	directionsService: any;
	directionsDisplay: any;
	myloc: Marker;
	
	constructor(navParams: NavParams) {
		this.lat = navParams.get('lat');
		this.lon = navParams.get('lon');
		this.dest = new google.maps.LatLng(this.lat, this.lon);
		this.directionsService = new google.maps.DirectionsService();
	}
	
	ionViewDidLoad(){
		this.initialize(function(dest: any, directionsDisplay: any, directionsService: any) {
			let request = {
				origin: new google.maps.LatLng(43.658642, -79.3966635),
				destination: dest,
				travelMode: 'WALKING'
			};
			directionsService.route(request, function(result, status) {
				if (status == 'OK') {
					directionsDisplay.setDirections(result);
				}
			});
		});
	}
 
	initialize(callback) {
		this.directionsDisplay = new google.maps.DirectionsRenderer();
		let mapOptions = {
			zoom: 14,
			center: this.dest
		}
		this.map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
		this.directionsDisplay.setMap(this.map);
		callback(this.dest, this.directionsDisplay, this.directionsService);
	}

}
