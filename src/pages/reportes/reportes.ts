import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';


@Component({
  selector: 'page-reportes',
  templateUrl: 'reportes.html',
})
export class ReportesPage {

    public foto: string;
    reporte= {
    fecha: "",
    ubicacion: "",
    observaciones: "",
}
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public alertController: AlertController, private camera: Camera) {
  }

  enviarReporte(formReporte) {

    console.log(formReporte.value);
  }

  showAlert() {
    let alertaRegistro= this.alertController.create({
      title: "Confirmación",
      message : "Reporte enviado satisfactoriamente",
      buttons : ['Aceptar']
    })
    alertaRegistro.present();
  }

  ionViewDidLoad() {
    const alert = this.alertCtrl.create({
      title: '¡Genera tu reporte!',
      subTitle: 'En esta sección podrás enviar reportes sobre zonas y/o cuadras que presenten un evidente descuido y presentación antihigienica',
      buttons: ['OK']
    });
    alert.present();
  }



  seleccionarFoto(){

    this.camera.getPicture(
      {
          destinationType: this.camera.DestinationType.DATA_URL,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
          targetWidth: 1000,
          targetHeight: 1000
      }).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
    }, (err) => {
        console.log(err);
    });
  }

  tomarFoto(){
    this.camera.getPicture({
    destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: this.camera.PictureSourceType.CAMERA,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
    }, (err) => {
        console.log(err);
    });
  }




}
