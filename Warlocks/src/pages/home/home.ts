import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { OnPage } from '../on/on';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	name: any;
	code = {
		id: ''
	}

	constructor(private http: Http, public navCtrl: NavController) {

	}

	go() {
		this.name = ''
		this.http.post('https://8ef33887.ngrok.io/name', {
			'id': this.code.id
		}).toPromise().then(data => {
			this.name = data.json()['name']
			this.navCtrl.push(OnPage, {
				'id': this.code.id,
				'name': this.name
			});
		}).catch(error => {
			console.error('An error occurred in onPage', error);
			return Promise.reject(error.message || error);
		});
	}
}
