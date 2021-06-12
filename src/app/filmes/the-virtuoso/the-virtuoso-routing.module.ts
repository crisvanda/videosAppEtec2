import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheVirtuosoPage } from './the-virtuoso.page';

const routes: Routes = [
  {
    path: '',
    component: TheVirtuosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheVirtuosoPageRoutingModule {}
