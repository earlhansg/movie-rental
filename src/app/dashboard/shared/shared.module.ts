import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MovieListComponent } from './components/movie-list/movie-list.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      BsDatepickerModule.forRoot(),
      FontAwesomeModule
    ],
    declarations: [
      MovieListComponent,
      FormComponent
    ],
    exports: [
      MovieListComponent,
      FormComponent,
      FontAwesomeModule
    ]
})
export class SharedModule {}
