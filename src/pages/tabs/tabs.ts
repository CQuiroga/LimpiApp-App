import { Component } from '@angular/core';
import { AcercadePage } from '../acercade/acercade';
import { IngresarPage } from '../ingresar/ingresar';
import { HomePage } from '../home/home';
import { SiguenosPage } from '../siguenos/siguenos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AcercadePage;
  tab3Root = SiguenosPage;
  tab4Root = IngresarPage;

  constructor() {

  }
}
