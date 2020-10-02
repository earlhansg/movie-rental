import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

import { UsersComponent } from './container/users/users.component';
import { UserComponent } from './container/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';


@NgModule({
    imports: [
      CommonModule,
      UsersRoutingModule,
      SharedModule
    ],
    declarations: [
      UsersComponent,
      UserComponent,
      UserListComponent
    ]
})
export class UserModule {}
