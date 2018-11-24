import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the CalculaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calcula',
  templateUrl: 'calcula.html',
})
export class CalculaPage {

  calcula = {

    peso:'test peso',
    distancia:'test distancia'
  }



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    }



  ionViewDidLoad() {
    console.log('Calcula ok');

  }

  enviarForm(miformulario){

    console.log(miformulario.value);
  }



}
