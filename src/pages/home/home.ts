import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AcercadePage } from '../acercade/acercade';
import { BeneficiosPage } from '../beneficios/beneficios';
import { ContactPage } from '../contact/contact';
import { CulturaPage } from '../cultura/cultura';
import { EcoaliadosPage } from '../ecoaliados/ecoaliados';
import { ReportesPage } from '../reportes/reportes';
import { RutasPage } from '../rutas/rutas';
import { SiguenosPage } from '../siguenos/siguenos';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
  contacto= {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  }

  seleccionado: string = "Home";
  CulturaPage = CulturaPage;
  AcercadePage = AcercadePage;
  BeneficiosPage = BeneficiosPage;
  ContactPage = ContactPage;
  EcoaliadosPage = EcoaliadosPage;
  ReportesPage = ReportesPage;
  RutasPage = RutasPage;
  SiguenosPage = SiguenosPage;
  constructor(public navCtrl: NavController, public alertController: AlertController) {

  }

  enviarFormulario(formContacto) {
    console.log(this.contacto);
    console.log(formContacto.value);
  }

  showAlert() {
    let alerta= this.alertController.create({
      title: "Confirmación",
      message : "Formulario enviado satisfactoriamente",
      buttons : ['Aceptar']
    })
    alerta.present();
  }

}
