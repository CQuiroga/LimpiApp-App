import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AcercadePage } from '../acercade/acercade';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SiguenosPage } from '../siguenos/siguenos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AcercadePage;
  tab3Root = SiguenosPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
