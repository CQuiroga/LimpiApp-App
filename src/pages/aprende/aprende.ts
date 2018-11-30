import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AprendePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aprende',
  templateUrl: 'aprende.html',
})
export class AprendePage {

  // array de objetos en la lista

  items = [
    ' > Usos de los materiales plásticos',
    ' > Gestión ambiental',
    ' > Clasificación de residuos',
    ' > Metales, selección y aplicación',
    ' > Origami con reciclaje',
    ' > Comercialización con reciclaje',
    ' > Construcción sostenible con botellas',
    ' > Gestión de residuos peligrosos'

  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AprendePage');
  }

}
