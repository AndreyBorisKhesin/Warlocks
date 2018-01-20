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
	accepted: Boolean;
	alat: number;
	alon: number;

	constructor(private http: Http, public navCtrl: NavController) {
		this.accepted = false;
	}

	ionViewDidLoad() {
		this.task = setInterval(() => {
			this.pull();
		}, 3000);
	}

	switch() {
		this.navCtrl.push(OffPage);
	}

	map(args: any) {
		this.navCtrl.push(GoPage, {
			alat: this.alat,
			alon: this.alon,
			blat: args['lat'],
			blon: args['lng'],
            name: args['name'],
            sex: args['sex'],
            age: args['age'],
            symptoms: args['symptoms']
		});
	}

	pull() {
		if (!this.accepted) {
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
						this.accepted = true;
						this.map(data.json());
					}
				}).catch(error => {
					console.error('An error occurred in onPage', error);
					return Promise.reject(error.message || error);
				});
			}, (err) => {});
		}
	}
}
