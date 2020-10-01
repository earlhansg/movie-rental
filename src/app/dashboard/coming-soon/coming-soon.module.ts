import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComingSoonRoutingModule } from './coming-soon-routing.module';

import { ComingSoonComponent } from './container/coming-soon.component';


@NgModule({
    imports: [
      CommonModule,
      ComingSoonRoutingModule
    ],
    declarations: [
      ComingSoonComponent
    ]
})
export class ComingSoonModule {}
