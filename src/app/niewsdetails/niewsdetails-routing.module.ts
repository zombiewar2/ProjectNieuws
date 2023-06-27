import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NiewsdetailsPage } from './niewsdetails.page';

const routes: Routes = [
  {
    path: '',
    component: NiewsdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NiewsdetailsPageRoutingModule {}
