import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';

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

    constructor(private mapService: MapService) { }

    ngOnInit() {
        this.markers = this.mapService.getMarkers();
    }
}

export interface Marker {
  lat: number;
  lng: number;
  label: string;
}
