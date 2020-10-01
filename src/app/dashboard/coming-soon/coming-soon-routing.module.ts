import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComingSoonComponent } from './container/coming-soon.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: ComingSoonComponent
  }
];


@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class ComingSoonRoutingModule {}
