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
    emergency: Emergency;

    constructor(private mapService: MapService) { }

    ngOnInit() {
        this.responders = this.mapService.getResponders();
        this.haveEmergency = true;
        this.emergency = this.getEmergency();
        if (this.haveEmergency) {
            this.mapStartEmergency(this.getEmergency());
        }
    }

    getEmergency(): Emergency {

        let em = new Emergency("Andrey Khesin", "male", "19", 43.6595053, -79.3978192, "missing eyeball");
        return em;

    }

    getResponderIcon(responder: Responder) {
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

    getEmergencyIcon(emergency: Emergency) {
        return '../../assets/emergency.png'
    }

    mapStartEmergency(em: Emergency): void {
    }
}
