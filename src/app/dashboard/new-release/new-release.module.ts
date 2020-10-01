import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewReleaseRoutingModule } from './new-release-routing.module';
import { SharedModule } from '../shared/shared.module';

import { NewReleaseComponent } from './container/new-release.component';

@NgModule({
    imports: [
      CommonModule,
      NewReleaseRoutingModule,
      SharedModule
    ],
    declarations: [
      NewReleaseComponent
    ]
})
export class NewReleaseModule {}
