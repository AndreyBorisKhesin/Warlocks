import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-off',
	templateUrl: 'off.html'
})
export class OffPage {
	name: any;

	constructor(public navCtrl: NavController, navParams: NavParams) {
		this.name = navParams.get('name');
	}

	switch() {
		this.navCtrl.pop();
	}
}
