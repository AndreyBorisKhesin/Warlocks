import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import { Responder } from '../classes';
import { Emergency } from '../classes';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    title: string = 'Doctors within Borders';
    lat: number = 43.6595053;
    lng: number = -79.3978192;
    zoom: number = 13;
    responders: Responder[];

    constructor(private mapService: MapService) { }

    ngOnInit() {
        this.responders = this.mapService.getResponders();
    }

    dispatch(responderId: string) {
        alert("Responder #" + responderId + " dispatched!");
    }
}
