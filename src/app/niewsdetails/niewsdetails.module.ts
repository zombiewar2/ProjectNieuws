import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NiewsdetailsPageRoutingModule } from './niewsdetails-routing.module';

import { NiewsdetailsPage } from './niewsdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NiewsdetailsPageRoutingModule
  ],
  declarations: [NiewsdetailsPage]
})
export class NiewsdetailsPageModule {}
