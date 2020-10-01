import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComingSoonRoutingModule } from './coming-soon-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ComingSoonComponent } from './container/coming-soon.component';


@NgModule({
    imports: [
      CommonModule,
      ComingSoonRoutingModule,
      SharedModule
    ],
    declarations: [
      ComingSoonComponent
    ]
})
export class ComingSoonModule {}
