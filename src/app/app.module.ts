import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AcercadePage } from '../pages/acercade/acercade';
import { BeneficiosPage } from '../pages/beneficios/beneficios';
import { CulturaPage } from '../pages/cultura/cultura';
import { EcoaliadosPage } from '../pages/ecoaliados/ecoaliados';
import { HomePage } from '../pages/home/home';
import { ReportesPage } from '../pages/reportes/reportes';
import { RutasPage } from '../pages/rutas/rutas';
import { SiguenosPage } from '../pages/siguenos/siguenos';
import { CalculaPage } from '../pages/calcula/calcula';
import { TabsPage } from '../pages/tabs/tabs';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Calendar } from '@ionic-native/calendar';
import { AgregarEventoPage } from '../pages/agregar-evento/agregar-evento';

import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from '@ionic-native/facebook';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  //Environment
} from '@ionic-native/google-maps';

import { Geolocation } from '@ionic-native/geolocation';

import firebase from 'firebase';

// páginas de inicio de sesión

import { IngresarPage } from '../pages/ingresar/ingresar';
import { RegistratePage } from '../pages/registrate/registrate';

//firebase

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthServiceProvider } from '../providers/auth-service';

var config = {
    apiKey: "AIzaSyA4fvMLrTx5Pa5p_fOPAflCWLgVHHfgno4",
    authDomain: "limpiapp-app.firebaseapp.com",
    databaseURL: "https://limpiapp-app.firebaseio.com",
    projectId: "limpiapp-app",
    storageBucket: "limpiapp-app.appspot.com",
    messagingSenderId: "577087848758"
};

let firebaseConfig = config;
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true});

@NgModule({
  declarations: [
    MyApp,
    AcercadePage,
    BeneficiosPage,
    IngresarPage,
    RegistratePage,
    CulturaPage,
    EcoaliadosPage,
    HomePage,
    ReportesPage,
    RutasPage,
    SiguenosPage,
    CalculaPage,
    TabsPage,
    AgregarEventoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AcercadePage,
    BeneficiosPage,
    IngresarPage,
    RegistratePage,
    CulturaPage,
    EcoaliadosPage,
    HomePage,
    ReportesPage,
    RutasPage,
    SiguenosPage,
    TabsPage,
    CalculaPage,
    AgregarEventoPage
  ],

  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    Camera,
    GoogleMaps,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Calendar,
    AuthServiceProvider,
    Facebook
  ]
})
export class AppModule {}
