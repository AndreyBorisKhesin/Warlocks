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
        // alert("Responder #" + responderId + " dispatched!");
    }

    getEmergency(): Emergency {
        let em = new Emergency("Andrey Khesin", "male", 19, "40 St George St, Toronto, ON M5S 2E4", "missing eyeball");
        return em;
    }

    getIcon(responder: Responder) {
        let path = '../../assets/';
        switch(responder.skills.length) {
            case 1:
                return path + 'cpr.png';
            case 2:
                return path + 'firstaid.png';
            case 3:
                return path + 'medkit.png';
            default:
                return path + 'medkit.png';
        }
    }
}
