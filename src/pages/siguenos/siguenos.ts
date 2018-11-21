import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

/**
 * Generated class for the SiguenosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-siguenos',
  templateUrl: 'siguenos.html',
})

export class SiguenosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private iab: InAppBrowser) {}

  openFace(){
    this.iab.create("http://www.facebook.com/fedesoftcol","_self");
  }

  openTwitter(){
    this.iab.create("http://twitter.com/fedesoftcol","_self");
  }

  openYoutube(){
    this.iab.create("http://www.youtube.com/channel/UCyjvUDXyN-0bwtvUZlT2bvQ","_self");
  }

  openLimpiapp(){
    this.iab.create("http://limpiappbogota.herokuapp.com","_blank");
  }

  ionViewDidLoad() {
    console.log('Página siguenos cargada correctamente');

  }

  ionViewWillEnter(){

    const alert = this.alertCtrl.create({
      title: '¡Siguenos en nuestras redes!',
      subTitle: 'Mantente al tanto de nuestras noticias, eventos, transmisiones en directo y comunidad. ♥',

      buttons: ['OK']
    });
    alert.present();
  }

}
