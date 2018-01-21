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
	map: any;
	ds: any;
	dr: any;
	myloc: Marker;
	dest: Marker;
	
	constructor(private platform: Platform, navParams: NavParams) {
		this.lat = navParams.get('lat');
		this.lon = navParams.get('lon');
	}
 
	ionViewDidLoad(){
		this.initializeMap();
	}
 
	initializeMap() {
 
		let locationOptions = {timeout: 20000, enableHighAccuracy: true};
		this.ds = new google.maps.DirectionsService();
 
		navigator.geolocation.getCurrentPosition(
 
			(position) => {
				let options = {
					center: new google.maps.LatLng((position.coords.latitude + this.lat) / 2, (position.coords.longitude + this.lon) / 2),
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

				this.dest = new google.maps.Marker({
					clickable: false,
					icon: new google.maps.MarkerImage('assets/imgs/emergency.png'),
					zIndex: 999,
					map: this.map
				});
		
				this.myloc.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
				this.dest.setPosition(new google.maps.LatLng(this.lat, this.lon));
				this.ds.route({
					origin: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
					destination: new google.maps.LatLng(this.lat, this.lon),
					travelMode: google.maps.TravelMode["WALKING"]
				}, function(response, status) {
					if (status == 'OK') {
						this.dr = new google.maps.DirectionsRenderer();
						this.dr.setMap(this.map);
						this.dr.setDirections(response);
					} else {
					}
				});
			}, (error) => {
				console.log(error);
			}, locationOptions
		);
	}
}
