import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { NiewsdetailsPage } from '../niewsdetails/niewsdetails.page';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'niewsdetails',
    component: NiewsdetailsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
