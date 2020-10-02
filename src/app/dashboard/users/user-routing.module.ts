import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './container/users/users.component';
import { UserComponent } from './container/user/user.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'new',
    component: UserComponent
  }
];


@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class UsersRoutingModule {}
