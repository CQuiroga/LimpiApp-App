import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalculaPage } from '../calcula/calcula';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CulturaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cultura',
  templateUrl: 'cultura.html',

})
export class CulturaPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  CalculaPage = CalculaPage;

  ionViewDidLoad() {
    console.log('Cultura Ok');
  }

  alertAprende() {
    const alert = this.alertCtrl.create({
      title: '¡Contenido no disponible!',
      subTitle: 'Estamos trabajando para traerte la mejor formación y contenido en reciclaje',
      buttons: ['OK']
    });
    alert.present();
  }

  alertPractica() {
    const alert = this.alertCtrl.create({
      title: '¡Contenido no disponible!',
      subTitle: 'Estamos trabajando para traerte certificaciones y cursos en temas de reciclaje',
      buttons: ['OK']
    });
    alert.present();
  }

}
