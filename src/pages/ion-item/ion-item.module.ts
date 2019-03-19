import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonItemPage } from './ion-item';

@NgModule({
  declarations: [
    IonItemPage,
  ],
  imports: [
    IonicPageModule.forChild(IonItemPage),
  ],
})
export class IonItemPageModule {}
