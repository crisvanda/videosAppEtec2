import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RayaPageRoutingModule } from './raya-routing.module';

import { RayaPage } from './raya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RayaPageRoutingModule
  ],
  declarations: [RayaPage]
})
export class RayaPageModule {}
