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
    markers: Marker[];
    responders: Responder[];

    constructor(private mapService: MapService) { }

    ngOnInit() {
        this.markers = this.mapService.getMarkers();
        this.responders = this.mapService.getResponders();
    }

    dispatch(responderId: string) {
        alert("Responder #" + responderId + " dispatched!");
    }

    getEmergency(): Emergency {
        let em = new Emergency("Andrey Khesin", "male", 19, "40 St George St, Toronto, ON M5S 2E4", "missing eyeball");
        return em;
    }
}

export interface Marker {
  lat: number;
  lng: number;
  label: string;
}
