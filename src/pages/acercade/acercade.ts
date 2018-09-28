import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-acercade',
  templateUrl: 'acercade.html'

})
export class AcercadePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AcercadePage');
  }
}
