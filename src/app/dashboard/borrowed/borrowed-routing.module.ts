import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BorrowedComponent } from './container/borrowed.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: BorrowedComponent
  }
];


@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class BorrowedRoutingModule {}
