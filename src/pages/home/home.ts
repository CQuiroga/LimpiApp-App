import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AcercadePage } from '../acercade/acercade';
import { BeneficiosPage } from '../beneficios/beneficios';
import { RegistratePage } from '../registrate/registrate';
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
  seleccionado: string = "Home";
  CulturaPage = CulturaPage;
  AcercadePage = AcercadePage;
  BeneficiosPage = BeneficiosPage;
  RegistratePage = RegistratePage;
  EcoaliadosPage = EcoaliadosPage;
  ReportesPage = ReportesPage;
  RutasPage = RutasPage;
  SiguenosPage = SiguenosPage;
  constructor(public navCtrl: NavController) {

  }
}
