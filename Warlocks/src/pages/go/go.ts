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
import { OnPage } from '../on/on';

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
	name: string;
	age: string;
	sex: string;
	symptoms: string;
	id: any;

	constructor(navParams: NavParams, public navCtrl: NavController) {
		this.alat = navParams.get('alat');
		this.alon = navParams.get('alon');
		this.blat = navParams.get('blat');
		this.blon = navParams.get('blon');
		this.name = navParams.get('name');
		this.age = navParams.get('age');
		this.sex = navParams.get('sex');
		this.symptoms = navParams.get('symptoms');
		this.loc = new google.maps.LatLng(this.alat, this.alon);
		this.dest = new google.maps.LatLng(this.blat, this.blon);
		this.directionsService = new google.maps.DirectionsService();
		this.id = navParams.get('id');
	}

	back() {
		this.navCtrl.push(OnPage, {
			id: this.id
		});
	}

	ionViewDidLoad(){
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
