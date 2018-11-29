import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { AcercadePage } from '../acercade/acercade';
import { BeneficiosPage } from '../beneficios/beneficios';
import { CulturaPage } from '../cultura/cultura';
import { EcoaliadosPage } from '../ecoaliados/ecoaliados';
import { ReportesPage } from '../reportes/reportes';
import { RutasPage } from '../rutas/rutas';
import { SiguenosPage } from '../siguenos/siguenos';
import { Calendar } from '@ionic-native/calendar';
import { AgregarEventoPage } from '../agregar-evento/agregar-evento';
import { CalculaPage } from '../calcula/calcula';

import { AuthServiceProvider } from '../../providers/auth-service';
import { IngresarPage } from '../ingresar/ingresar';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import firebase from 'firebase';

import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {

  registros: any[] = []; // variable para guardar los registros

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
  IngresarPage = IngresarPage;
  EcoaliadosPage = EcoaliadosPage;
  ReportesPage = ReportesPage;
  RutasPage = RutasPage;
  SiguenosPage = SiguenosPage;

  //variables para calendario
  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  eventList: any;
  selectedEvent: any;
  isSelected: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertController: AlertController,
    public alerta: AlertController,
    private calendar: Calendar,
    public authService: AuthServiceProvider,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private splashScreen: SplashScreen) {}
  ionViewWillEnter() {
    this.date = new Date();
    this.monthNames = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    this.getDaysOfMonth();
    this.loadEventThisMonth();
}


  // función muestra alerta
  showAlert() {
    let alerta= this.alertController.create({
      title: "Confirmación",
      message : "Formulario enviado satisfactoriamente",
      buttons : ['Aceptar']
    })
    alerta.present();
  }

  // función para mostrar calendario

  getDaysOfMonth() {
      this.daysInThisMonth = new Array();
      this.daysInLastMonth = new Array();
      this.daysInNextMonth = new Array();
      this.currentMonth = this.monthNames[this.date.getMonth()];
      this.currentYear = this.date.getFullYear();
      if(this.date.getMonth() === new Date().getMonth()) {
        this.currentDate = new Date().getDate();
      } else {
        this.currentDate = 999;
      }

      var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
      var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
      for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
        this.daysInLastMonth.push(i);
      }

      var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
      for (var j = 0; j < thisNumOfDays; j++) {
        this.daysInThisMonth.push(j+1);
      }

      var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
      // var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
      for (var k = 0; k < (6-lastDayThisMonth); k++) {
        this.daysInNextMonth.push(k+1);
      }
      var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
      if(totalDays<36) {
        for(var l = (7-lastDayThisMonth); l < ((7-lastDayThisMonth)+7); l++) {
          this.daysInNextMonth.push(l);
        }
      }
    }
    // función ir al anterior mes
    goToLastMonth() {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
      this.getDaysOfMonth();
    }
    // función ir al siguiente mes
    goToNextMonth() {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
      this.getDaysOfMonth();
    }
    // función agregar evento
    addEvent() {
      this.navCtrl.push(AgregarEventoPage);
    }
    // función cargar mes del evento creado
    loadEventThisMonth() {
      this.eventList = new Array();
      var startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
      var endDate = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0);
      this.calendar.listEventsInRange(startDate, endDate).then(
        (msg) => {
          msg.forEach(item => {
            this.eventList.push(item);
          });
        },
        (err) => {
          console.log(err);
        }
      );
    }
    // función traer día del evento creado
    checkEvent(day) {
        var hasEvent = false;
        var thisDate1 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 00:00:00";
        var thisDate2 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59";
        this.eventList.forEach(event => {
          if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
            hasEvent = true;
          }
        });
        return hasEvent;
    }
    // función seleccionar día (dentro del evento)
    selectDate(day) {
        this.isSelected = false;
        this.selectedEvent = new Array();
        var thisDate1 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 00:00:00";
        var thisDate2 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59";
        this.eventList.forEach(event => {
          if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
            this.isSelected = true;
            this.selectedEvent.push(event);
          }
        });
    }
    // función eliminar el evento (ya creado)
    deleteEvent(evt) {
      // console.log(new Date(evt.startDate.replace(/\s/, 'T')));
      // console.log(new Date(evt.endDate.replace(/\s/, 'T')));
      let alert = this.alertCtrl.create({
        title: 'Confirmar elimunación',
        message: '¿Estas eguro de eliminar este evento?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Acción cancelada');
            }
          },
          {
            text: 'Ok',
            handler: () => {
              this.calendar.deleteEvent(evt.title, evt.location, evt.notes, new Date(evt.startDate.replace(/\s/, 'T')), new Date(evt.endDate.replace(/\s/, 'T'))).then(
                (msg) => {
                  console.log(msg);
                  this.loadEventThisMonth();
                  this.selectDate(new Date(evt.startDate.replace(/\s/, 'T')).getDate());
                },
                (err) => {
                  console.log(err);
                }
              )
            }
          }
        ]
      });
      alert.present();
    }

    // Método formulario de contacto

    nuevoContacto(){
    let alerta = this.alerta.create({
      title: "Formulario de Contacto",
      message: "Por favor ingresa tus datos",
      inputs: [
        {
          type: "text",
          placeholder: "Nombre:", // texto por defecto del input
          name: "nombre" // para el data binding
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
          placeholder: "Mensaje:",
          name: "mensaje"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          handler: () => {} // Funcion que se ejecuta al pulsar el boton, este boton no hará nada
        },
        {
          text: "Enviar",
          handler: (datos) => {
            firebase.firestore().collection("contactos").add({
              nombre: datos.nombre ,
              correo: datos.correo,
              telefono: datos.telefono,
              mensaje: datos.mensaje
            })
            .then((documento) => {
              console.log("Formulario de contacto enviado");
              // crea toast de confirmación
              const toast = this.toastCtrl.create({
                message: '¡Formulario enviado satisfactoriamente!',
                showCloseButton: true,
                closeButtonText: 'Ok',
                position: 'middle'
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

    salir(){
      this.authService.salir();
      this.navCtrl.setRoot(IngresarPage);
    }
}
