import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RogaiporNosPageRoutingModule } from './rogaipor-nos-routing.module';

import { RogaiporNosPage } from './rogaipor-nos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RogaiporNosPageRoutingModule
  ],
  declarations: [RogaiporNosPage]
})
export class RogaiporNosPageModule {}
