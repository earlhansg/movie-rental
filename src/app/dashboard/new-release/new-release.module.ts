import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewReleaseRoutingModule } from './new-release-routing.module';

import { NewReleaseComponent } from './container/new-release.component';


@NgModule({
    imports: [
      CommonModule,
      NewReleaseRoutingModule
    ],
    declarations: [
      NewReleaseComponent
    ]
})
export class NewReleaseModule {}
