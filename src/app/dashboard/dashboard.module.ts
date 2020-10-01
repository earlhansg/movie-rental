import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './container/dashboard.component';


@NgModule({
    imports: [
      BrowserModule,
      DashboardRoutingModule
    ],
    declarations: [ DashboardComponent ]
})
export class DashboardModule {}
