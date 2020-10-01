import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewReleaseComponent } from './container/new-release.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: NewReleaseComponent
  }
];


@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class NewReleaseRoutingModule {}
