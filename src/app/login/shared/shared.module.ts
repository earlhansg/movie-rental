import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthFormComponent } from './components/auth-form.component/auth-form.component';


@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FontAwesomeModule
    ],
    declarations: [
      AuthFormComponent
    ],
    exports: [
      FontAwesomeModule,
      AuthFormComponent
    ]
})
export class SharedModule {}
