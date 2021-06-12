import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RayaPage } from './raya.page';

const routes: Routes = [
  {
    path: '',
    component: RayaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RayaPageRoutingModule {}
