import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GelikedPage } from './geliked.page';

const routes: Routes = [
  {
    path: '',
    component: GelikedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GelikedPageRoutingModule {}
