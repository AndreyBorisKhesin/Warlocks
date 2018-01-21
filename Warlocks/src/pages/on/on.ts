import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
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
	confirm: any;

	constructor(private http: Http, public navCtrl: NavController,
		public alertCtrl: AlertController) {
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

	showConfirm(distance: number) {
		this.confirm = this.alertCtrl.create({
			title: 'Accept New Emergency?',
			message: 'A civilian ' + distance + ' metres away needs help! Do you agree to help them?',
			buttons: [{
				text: 'No',
				handler: () => {
					this.http.post('https://8ef33887.ngrok.io/polling/accept', {
						'go': false,
					}).toPromise().then(data => {}).catch(error => {
						console.error('An error occurred in onPage', error);
						return Promise.reject(error.message || error);
					});
					this.accepted = false;
				}
			}, {
				text: 'Yes',
				handler: () => {
					this.http.post('https://8ef33887.ngrok.io/polling/accept', {
						'go': true,
					}).toPromise().then(data => {
						this.map(data.json())
					}).catch(error => {
						console.error('An error occurred in onPage', error);
						return Promise.reject(error.message || error);
					});
				}
			}]
		});
		this.confirm.present();
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
					'id': '342d'
				}).toPromise().then(data => {
					if (data.json()['em']) {
						this.accepted = true;
						this.showConfirm(data.json()['dist'])
					}
				}).catch(error => {
					console.error('An error occurred in onPage', error);
					return Promise.reject(error.message || error);
				});
			}, (err) => {});
		}
	}
}
