import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import { Responder } from '../classes';
import { Emergency } from '../classes';
import { ShareFormService } from '../share-form.service';

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
  zoom: number = 14;
  responders: Responder[];
  haveEmergency: boolean;
  emergency: Emergency;
  gotResponders: boolean;

  getEmergency(): Emergency {
    return this.shareFormService.sharedata();
  }

  constructor(private mapService: MapService,
    private shareFormService: ShareFormService) {
  }

  ngOnInit() {
    // this.responders = this.mapService.getResponders();
    this.gotResponders = false;
    this.responders = [];
    this.haveEmergency = true;
    this.emergency = this.getEmergency();
    if (this.haveEmergency) {

    }
  }

  getResponderIcon(responder: Responder) {
    let path = '../../assets/';
    switch (responder.skills) {
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

  emergencyClick(emergency: Emergency) {
    this.mapStartEmergency(emergency);
  }

  getEmergencyIcon(emergency: Emergency) {
    return '../../assets/emergency.png'
  }

  mapStartEmergency(em: Emergency): void {
    console.log(em);
    this.mapService.startEmergency(em).then(
      response => {
        console.log("in map component");
        this.responders = response;
        console.log(this.responders);
        this.gotResponders = true;

        // find closest responder
        let closest = this.findClosestResponder(em);
        console.log(closest);
        console.log("Closest responder: " + closest[0]['id'] + ", " +
          closest[0]['dist'] + " meters");
        // send closest responders to server
        this.mapService.SendClosestResponders(closest);
      }
    )
  }

  calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number) {
    let point1 = new google.maps.LatLng(lat1, lng1);
    let point2 = new google.maps.LatLng(lat2, lng2);
    let distance = google.maps.geometry.spherical.computeDistanceBetween(point1, point2);
    return distance;
  }

  findClosestResponder(emergency: Emergency): {} {
    let dict = {};
    let keys = [];
    let sorted = [];
    let j = 0;
    for (let r of this.responders) {
      dict[r.id] = this.calculateDistance(r.lat, r.lng, emergency.Lat, emergency.Lng);
      keys[j] = r.id;
      j = j + 1;
    }
    console.log("Dict:");
    console.log(dict);
    console.log(this.responders.length);
    j = 0;
    while (j < this.responders.length) {
      console.log("Start while");
      let min = 100000;
      let k;
      for (let ke of keys) {
        if (min > dict[ke]) {
          min = dict[ke];
          k = ke
        }
      }
      sorted[j] = k;
      let index = keys.indexOf(k, 0);
      if (index > -1) {
        keys.splice(index, 1);
      }
      j = j + 1;
    }
    console.log("Sorted: ");
    console.log(sorted);
    console.log(sorted.length);

    j = 0;
    let ret = [];
    while (j < sorted.length) {
      console.log("s: " + sorted[j]);
      ret[j] = { "id": sorted[j], "dist": Math.round(dict[sorted[j]]) };
      j += 1;
    }

    return ret;
  }
}
