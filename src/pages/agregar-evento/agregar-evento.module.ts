import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarEventoPage } from './agregar-evento';

@NgModule({
  declarations: [
    AgregarEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarEventoPage),
  ],
})
export class AgregarEventoPageModule {}
