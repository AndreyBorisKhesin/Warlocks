import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OffPage } from '../off/off';

@Component({
	selector: 'page-on',
	templateUrl: 'on.html'
})
export class OnPage {

	constructor(public navCtrl: NavController) {

	}

	switch() {
		this.navCtrl.push(OffPage);
	}

}
