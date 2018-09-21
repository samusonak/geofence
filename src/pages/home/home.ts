import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
declare var google;
let map: any;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.getPlaces();
  }
  getPlaces() {
    var coord = new google.maps.LatLng(-6.854, 107.598);
    map = new google.maps.Map(document.getElementById('map'), {
      center: coord,
      zoom: 12
    });
    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: coord,
      radius: 500,
      type: ['restaurant']
    }, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          console.log(results[i]);
        }
      }
    });
  }
}
