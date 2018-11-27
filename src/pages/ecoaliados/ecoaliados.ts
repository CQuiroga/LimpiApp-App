import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, AlertController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-ecoaliados',
  templateUrl: 'ecoaliados.html',
})
export class EcoaliadosPage {

  HomePage = HomePage;
  registros: any[] = []; // variable para guardar los registros

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerta: AlertController,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('Ecoaliados ok');
  }

  nuevoEcoaliado(){
  let alerta = this.alerta.create({
    title: "Registro de ecoaliados",
    message: "Por favor ingresa tus datos",
    inputs: [
      {
        type: "text",
        placeholder: "Nombre u organización:", // texto por defecto del input
        name: "nombre" // para el data binding
      },
      {
        type: "text",
        placeholder: "Cédula o NIT:",
        name: "cedula"
      },
      {
        type: "text",
        placeholder: "Dirección:",
        name: "direccion"
      },
      {
        type: "text",
        placeholder: "Correo:",
        name: "correo"
      },
      {
        type: "text",
        placeholder: "Teléfono:",
        name: "telefono"
      },
      {
        type: "string",
        placeholder: "Mensaje/comentarios:",
        name: "mensaje"
      }
    ],
    buttons: [
      {
        text: "Cancelar",
        handler: () => {} // Funcion que se ejecuta al pulsar el boton, este boton no hará nada
      },
      {
        text: "Ser Ecoaliado",
        handler: (datos) => {
          firebase.firestore().collection("ecoaliados").add({
            nombre: datos.nombre ,
            cedula: datos.cedula,
            direccion: datos.direccion,
            correo: datos.correo,
            telefono: datos.telefono,
            mensaje: datos.mensaje
          })
          .then((documento) => {
            console.log('ecoaliado ' + datos.nombre + ' creado satisfactoriamente');
            // crea toast de confirmación
            const toast = this.toastCtrl.create({
              message: '¡Te has registrado como ecoaliado!',
              showCloseButton: true,
              closeButtonText: 'Ok'
            });
            toast.onDidDismiss(this.dismissHandler);
            toast.present();
          })
          .catch((error) => {
            console.log(error.message);
          });
        }
      }
    ]
  });
  alerta.present();
}

private dismissHandler() {
   console.info('ok');
}

}
