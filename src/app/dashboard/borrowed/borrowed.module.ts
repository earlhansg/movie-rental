import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorrowedRoutingModule } from './borrowed-routing.module';

import { BorrowedComponent } from './container/borrowed.component';


@NgModule({
    imports: [
      CommonModule,
      BorrowedRoutingModule
    ],
    declarations: [
      BorrowedComponent
    ]
})
export class BorrowedModule {}
