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
	alat: number;
	alon: number;
	blat: number;
	blon: number;
	loc: any;
	dest: any;
	map: any;
	directionsService: any;
	directionsDisplay: any;
	
	constructor(navParams: NavParams) {
		this.blat = navParams.get('lat');
		this.blon = navParams.get('lon');
		this.dest = new google.maps.LatLng(this.blat, this.blon);
		this.directionsService = new google.maps.DirectionsService();
	}
	
	ionViewDidLoad(){
		let locationOptions = {timeout: 20000, enableHighAccuracy: true};
		navigator.geolocation.getCurrentPosition((position) => {
			this.alat = position.coords.latitude;
			this.alon = position.coords.longitude;
			this.loc = new google.maps.LatLng(this.alat, this.alon);
			this.initialize(function(loc: any, dest: any, directionsDisplay: any, directionsService: any, map: any, callback) {
				let request = {
					origin: loc,
					destination: dest,
					travelMode: 'WALKING'
				};
				directionsService.route(request, function(result, status) {
					if (status == 'OK') {
						directionsDisplay.setDirections(result);
					}
				});
				callback(map);
			});
		}, (err) => {}, locationOptions);
	}
 
	initialize(callback) {
		this.directionsDisplay = new google.maps.DirectionsRenderer();
		let mapOptions = {
			zoom: 17,
			center: new google.maps.LatLng((this.alat + this.blat) / 2, (this.alon + this.blon) / 2)
		}
		this.map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
		this.directionsDisplay.setMap(this.map);
		callback(this.loc, this.dest, this.directionsDisplay, this.directionsService, this.map, function(map: any) {
			google.maps.event.trigger('resize', map);
		});
	}
}
