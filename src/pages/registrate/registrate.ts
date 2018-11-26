import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Platform } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';
import { UserModel } from '../../models/user-model';
import { Facebook } from '@ionic-native/facebook';
import { IngresarPage } from '../ingresar/ingresar';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-registrate',
  templateUrl: 'registrate.html'
})
export class RegistratePage {

  userModel: UserModel;

  constructor(public navCtrl: NavController,
      public loadingCtrl: LoadingController,
      public alertCtrl: AlertController,
      public authService: AuthServiceProvider,
      public platform: Platform,
      public facebook: Facebook) {
        this.userModel = new UserModel();
  }

  registrar() {
      let loading = this.loadingCtrl.create({
          content: 'Creando cuenta. Por favor, espere...',
          duration: 10000
      });
      loading.present();


      this.authService.createUserWithEmailAndPassword(this.userModel).then(result => {
          loading.dismiss();

          this.navCtrl.push(IngresarPage);
      }).catch(error => {
          loading.dismiss();

          console.log(error);
          this.alert('Error', 'Ha ocurrido un error inesperado. Por favor intente nuevamente.');
      });
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

  alert(title: string, message: string) {
      let alert = this.alertCtrl.create({
          title: title,
          subTitle: message,
          buttons: ['OK']
      });
      alert.present();
    }

}
