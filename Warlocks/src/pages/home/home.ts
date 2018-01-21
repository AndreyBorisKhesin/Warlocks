import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OnPage } from '../on/on';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	code = {
		id: ''
	}

	constructor(public navCtrl: NavController) {

	}

	go() {
		this.navCtrl.push(OnPage, {
			'id': this.code.id
		});
	}
}
