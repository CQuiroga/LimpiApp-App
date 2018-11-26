import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController  } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import firebase from 'firebase';

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
  public authService: AuthServiceProvider) {
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



  nuevoRegistro(){
  let alerta = this.alerta.create({
    title: "Registro de usuarios",
    message: "Por favor ingresa tus datos",
    inputs: [
      {
        type: "text",
        placeholder: "Nombre:", // texto por defecto del input
        name: "nombre" // para el data binding
      },
      {
        type: "text",
        placeholder: "Cédula:",
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
        type: "text",
        placeholder: "Localidad:",
        name: "localidad"
      },
      {
        type: "text",
        placeholder: "N° SITP ó Transmilenio:",
        name: "tarjeta"
      },
      {
        type: "text",
        placeholder: "Contraseña:",
        name: "contrasena"
      }
    ],
    buttons: [
      {
        text: "Cancelar",
        handler: () => {} // Funcion que se ejecuta al pulsar el boton, este boton no hará nada
      },
      {
        text: "Registrarse",
        handler: (datos) => {
          firebase.firestore().collection("registros").add({
            nombre: datos.nombre ,
            cedula: datos.cedula,
            direccion: datos.direccion,
            correo: datos.correo,
            localidad: datos.localidad,
            tarjeta: datos.tarjeta,
            contrasena: datos.contrasena
          })
          .then((documento) => {
            console.log("Registro nuevo creado");
            // crea toast de confirmación
            const toast = this.toastCtrl.create({
              message: '¡Usuario registrado correctamente!',
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
