import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-acercade',
  templateUrl: 'acercade.html'
})
export class AcercadePage {

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AcercadePage');
  }
}
