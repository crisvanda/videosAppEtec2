import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RogaiporNosPage } from './rogaipor-nos.page';

const routes: Routes = [
  {
    path: '',
    component: RogaiporNosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RogaiporNosPageRoutingModule {}
