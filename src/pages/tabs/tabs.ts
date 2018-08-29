import { Component } from '@angular/core';

import { AcercadePage } from '../acercade/acercade';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ReportesPage } from '../reportes/reportes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AcercadePage;
  tab3Root = ContactPage;
  tab4Root = ReportesPage;

  constructor() {

  }
}
