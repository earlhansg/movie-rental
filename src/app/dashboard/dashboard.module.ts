import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './container/dashboard.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContentComponent } from './components/content/content.component';


@NgModule({
    imports: [
      BrowserModule,
      DashboardRoutingModule
    ],
    declarations: [
      DashboardComponent,
      HeaderBarComponent,
      SideBarComponent,
      ContentComponent
    ]
})
export class DashboardModule {}
