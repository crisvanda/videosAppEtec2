import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheVirtuosoPageRoutingModule } from './the-virtuoso-routing.module';

import { TheVirtuosoPage } from './the-virtuoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheVirtuosoPageRoutingModule
  ],
  declarations: [TheVirtuosoPage]
})
export class TheVirtuosoPageModule {}
