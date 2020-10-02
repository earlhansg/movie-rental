import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnChanges {

  @Input()
  props;

  form: FormGroup;

  formProps = [];
  minDate: Date;
  maxDate: Date;


  constructor() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 3);
  }

  ngOnChanges(): void {
    const formDataObj = {};
    for (const prop of Object.keys(this.props)) {
      formDataObj[prop] = new FormControl(this.props[prop].value);
      this.formProps.push({
        key: prop,
        label: this.props[prop].label,
        type: this.props[prop].type,
        placeholder: this.props[prop].placeholder || ''
      });
    }
    this.form = new FormGroup(formDataObj);
  }

  submit(): void {
    console.log('values in form', this.form.value);
  }

}
