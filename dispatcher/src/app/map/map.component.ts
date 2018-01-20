import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import { Responder } from '../classes';
import { Emergency } from '../classes';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [MapService]
})
export class MapComponent implements OnInit {
    title: string = 'Doctors within Borders';
    lat: number = 43.6595053;
    lng: number = -79.3978192;
    zoom: number = 13;
    responders: Responder[];
    haveEmergency: boolean;

    constructor(private mapService: MapService) { }

    ngOnInit() {
        this.responders = this.mapService.getResponders();
        this.haveEmergency = true;
        if (this.haveEmergency) {
            this.mapStartEmergency(this.getEmergency());
        }
    }

    getEmergency(): Emergency {
        let em = new Emergency("Andrey Khesin", "male", 19,
        "40 St George St, Toronto, ON M5S 2E4", 43.6596426, -79.3976676,
        "missing eyeball");
        return em;
    }

    mapStartEmergency(em: Emergency): void {

    }
}
