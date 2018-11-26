import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';
import { UserModel } from '../../models/user-model';

import { IngresarPage } from '../ingresar/ingresar';

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
      public authService: AuthServiceProvider) {
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

  alert(title: string, message: string) {
      let alert = this.alertCtrl.create({
          title: title,
          subTitle: message,
          buttons: ['OK']
      });
      alert.present();
    }

}
