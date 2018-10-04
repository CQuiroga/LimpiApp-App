import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

/**
 * Generated class for the AgregarEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar-evento',
  templateUrl: 'agregar-evento.html',
})
export class AgregarEventoPage {
  event = { titulo: "", ubicacion: "", notas: "", comienzo_dia: "", fin_dia: "" };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private calendar: Calendar) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarEventoPage');
  }

  // función para para guardar el Evento

  save() {
    this.calendar.createEvent(this.event.titulo, this.event.ubicacion, this.event.notas, new Date(this.event.comienzo_dia), new Date(this.event.fin_dia)).then(
      (msg) => {
        let alert = this.alertCtrl.create({
          title: '¡Éxito!',
          subTitle: 'El evento ha sido guardado',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop();
      },
      (err) => {
        let alert = this.alertCtrl.create({
          title: '¡Error!',
          subTitle: err,
          buttons: ['OK']
        });
        alert.present();
      }
    );
}
}
