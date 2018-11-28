import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController,Platform} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import firebase from 'firebase';

import { Facebook } from '@ionic-native/facebook';

// firebase

import { AuthServiceProvider } from '../../providers/auth-service';
import { UserModel } from '../../models/user-model';

// páginas de inicio de sesión y regreso

import { HomePage } from '../home/home';
import { RegistratePage } from '../registrate/registrate';

@IonicPage()
@Component({
  selector: 'page-ingresar',
  templateUrl: 'ingresar.html',
})
export class IngresarPage {

  userModel: UserModel;
  registros: any[] = []; // variable para guardar los registros

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerta: AlertController,
  private toastCtrl: ToastController, private iab: InAppBrowser,
  public loadingCtrl: LoadingController,
  public alertCtrl: AlertController,
  public authService: AuthServiceProvider,
  public platform: Platform,
  public facebook: Facebook) {
    this.userModel = new UserModel();
  }

  ingresar() {
    let loading = this.loadingCtrl.create({
            content: 'Iniciando sesión. Por favor, espere...',
            duration: 10000
        });
        loading.present();

        this.authService.signInWithEmailAndPassword(this.userModel).then(result => {
            loading.dismiss();

            this.navCtrl.setRoot(HomePage);
        }).catch(error => {
            loading.dismiss();

            console.log(error);
            this.alert('Error', 'Ha ocurrido un error inesperado. Por favor intente nuevamente.');
          });
    }

    registrar() {
        this.navCtrl.push(RegistratePage);
    }

    alert(title: string, message: string) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
}

  ionViewDidLoad() {
    /* para hacer un "select" a firebase

    firebase.firestore().collection('registros').get().then((datos)=>{
       datos.forEach(registros => { //Recorrer el array
       this.registros.push(registros); //Guardar el post en variable global "registros"
    })
  })
    .catch((error)=>{
      console.log(error.message);
    })

    */
  }

  signInWithFacebook() {
        if (this.platform.is('cordova')) {
            return this.facebook.login(['email']).then(result => {
                this.authService.signInWithFacebook(result.authResponse.accessToken).then(result => {
                    this.navCtrl.setRoot(HomePage);
                });
            });
        } else {
            return this.authService.signInWithPopup().then(result => {
                this.navCtrl.setRoot(HomePage);
            });
        }
  }
}
