import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AcercadePage } from '../pages/acercade/acercade';
import { BeneficiosPage } from '../pages/beneficios/beneficios';
import { ContactPage } from '../pages/contact/contact';
import { CulturaPage } from '../pages/cultura/cultura';
import { EcoaliadosPage } from '../pages/ecoaliados/ecoaliados';
import { HomePage } from '../pages/home/home';
import { ReportesPage } from '../pages/reportes/reportes';
import { RutasPage } from '../pages/rutas/rutas';
import { SiguenosPage } from '../pages/siguenos/siguenos';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AcercadePage,
    BeneficiosPage,
    ContactPage,
    CulturaPage,
    EcoaliadosPage,
    HomePage,
    ReportesPage,
    RutasPage,
    SiguenosPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AcercadePage,
    BeneficiosPage,
    ContactPage,
    CulturaPage,
    EcoaliadosPage,
    HomePage,
    ReportesPage,
    RutasPage,
    SiguenosPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
