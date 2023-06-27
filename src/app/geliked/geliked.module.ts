import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GelikedPageRoutingModule } from './geliked-routing.module';

import { GelikedPage } from './geliked.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GelikedPageRoutingModule
  ],
  declarations: [GelikedPage]
})
export class GelikedPageModule {}
