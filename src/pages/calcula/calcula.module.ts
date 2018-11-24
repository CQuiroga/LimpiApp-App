import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculaPage } from './calcula';

@NgModule({
  declarations: [
    CalculaPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculaPage),
  ],
})
export class CalculaPageModule {}
