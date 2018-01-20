import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
	map: any;
	myloc: Marker;
	
	constructor(private platform: Platform) {

	}
 
	ionViewDidLoad(){
		this.initializeMap();
	}
 
	initializeMap() {
 
		let locationOptions = {timeout: 20000, enableHighAccuracy: true};
 
		navigator.geolocation.getCurrentPosition(
 
			(position) => {
				let options = {
					center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
					zoom: 16,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				}
 
				this.map = new google.maps.Map(document.getElementById("map_canvas"), options);

				this.myloc = new google.maps.Marker({
					clickable: false,
					icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
						new google.maps.Size(22,22),
						new google.maps.Point(0,18),
						new google.maps.Point(11,11)),
					shadow: null,
					zIndex: 999,
					map: this.map
				});

				this.myloc.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
			}, (error) => {
				console.log(error);
			}, locationOptions
		);
	}
}
