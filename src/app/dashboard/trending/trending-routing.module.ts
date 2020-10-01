import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrendingComponent } from './container/trending.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: TrendingComponent
  }
];


@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class TrendingRoutingModule {}
