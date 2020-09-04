import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KofluencePage } from './kofluence.page';

const routes: Routes = [
  {
    path: '',
    component: KofluencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KofluencePageRoutingModule {}
