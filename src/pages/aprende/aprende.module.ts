import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AprendePage } from './aprende';

@NgModule({
  declarations: [
    AprendePage,
  ],
  imports: [
    IonicPageModule.forChild(AprendePage),
  ],
})
export class AprendePageModule {}
