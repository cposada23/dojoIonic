import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepositoriosPage } from './repositorios';

@NgModule({
  declarations: [
    RepositoriosPage,
  ],
  imports: [
    IonicPageModule.forChild(RepositoriosPage),
  ],
})
export class RepositoriosPageModule {}
