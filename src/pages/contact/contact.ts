import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController  } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  registros: any[] = []; // variable para guardar los registros

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerta: AlertController,
  private toastCtrl: ToastController, public alertCtrl: AlertController, private iab: InAppBrowser) {

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
