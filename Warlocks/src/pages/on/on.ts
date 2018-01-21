import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { OffPage } from '../off/off';
import { GoPage } from '../go/go';

@Component({
	selector: 'page-on',
	templateUrl: 'on.html'
})
export class OnPage {
	task: any;
	alat: number;
	alon: number;

	constructor(private http: Http, public navCtrl: NavController) {
	}

	ionViewDidLoad() {
		this.task = setInterval(() => {
			this.pull();
		}, 3000);
	}

	switch() {
		this.navCtrl.push(OffPage);
	}

	map(lat: number, lon: number) {
		this.navCtrl.push(GoPage, {
			alat: this.alat,
			alon: this.alon,
			blat: lat,
			blon: lon
		});
	}

	pull() {
		let locationOptions = {timeout: 20000, enableHighAccuracy: true};
		navigator.geolocation.getCurrentPosition((position) => {
			this.alat = position.coords.latitude;
			this.alon = position.coords.longitude;

			this.http.post('https://8ef33887.ngrok.io/polling', {
				'lat': this.alat,
				'lng': this.alon,
				'id': '4913'
			}).toPromise().then(data => {
				if (data.json()['em']) {
					this.map(data.json()['lat'], data.json()['lng']);
				}
			}).catch(error => {
				console.error('An error occurred in onPage', error);
				return Promise.reject(error.message || error);
			});
		}, (err) => {});
	}
}
