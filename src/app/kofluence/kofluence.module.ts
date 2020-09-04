import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KofluencePageRoutingModule } from './kofluence-routing.module';

import { KofluencePage } from './kofluence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KofluencePageRoutingModule
  ],
  declarations: [KofluencePage]
})
export class KofluencePageModule {}
