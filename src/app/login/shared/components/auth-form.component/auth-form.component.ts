import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {

  @Input()
  errorMessage: string;

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  userForm: FormGroup = new FormGroup({ userId: new FormControl() });


  constructor() { }

  onFormSubmit(): void {
    this.submitted.next(this.userForm.get('userId').value);
    this.userForm.reset();
  }

}
