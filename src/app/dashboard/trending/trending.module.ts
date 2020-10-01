import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingRoutingModule } from './trending-routing.module';
import { SharedModule } from '../shared/shared.module';

import { TrendingComponent } from './container/trending.component';


@NgModule({
    imports: [
      CommonModule,
      TrendingRoutingModule,
      SharedModule
    ],
    declarations: [
      TrendingComponent
    ]
})
export class TrendingModule {}
