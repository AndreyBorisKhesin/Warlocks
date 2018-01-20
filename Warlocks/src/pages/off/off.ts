import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-off',
	templateUrl: 'off.html'
})
export class OffPage {
	constructor(public navCtrl: NavController) {

	}

	switch() {
		this.navCtrl.pop();
	}
}
