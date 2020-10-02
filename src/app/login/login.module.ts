import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from './shared/shared.module';

import { LoginComponent } from './container/login.component';


@NgModule({
    imports: [
      BrowserModule,
      LoginRoutingModule,
      SharedModule
    ],
    declarations: [
      LoginComponent
    ]
})
export class LoginModule {}
