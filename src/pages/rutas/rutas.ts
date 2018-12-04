import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, MenuController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';

import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the RutasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rutas',
  templateUrl: 'rutas.html',

})
export class RutasPage {
  mapElement;
  map;

  constructor(public navCtrl: NavController, private googleMaps: GoogleMaps,
  private geolocation:Geolocation) {
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.loadMap(resp.coords);
    }).catch((error) => {
      console.log('Error obteniendo la localización', error);
    });
  }

  loadMap(coords){
    this.mapElement = document.getElementById('map');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: coords.latitude,
          lng: coords.longitude
        },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = this.googleMaps.create(this.mapElement, mapOptions);
    this.map.one(GoogleMapsEvent.MAP_READY).then(()=>{
      this.map.addMarker({
        title: 'Mi Ruta',
        icon: 'green',
        animation: 'DROP',
        position: {
          lat: coords.latitude,
          lng:coords.longitude
        }
      })
      .then(marker => {
        marker.on(GoogleMapsEvent.MARKER_CLICK)
          .subscribe(() => {
            alert('clicked');
          });
      });

  });
  }
}
