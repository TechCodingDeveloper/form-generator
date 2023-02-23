import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {InputExtendModel, InputModel} from "./models/input-model";
import {ConfigModel} from "./models/config-model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-generation',
  templateUrl: './form-generation.component.html',
  styleUrls: ['./form-generation.component.scss']
})
export class FormGenerationComponent<T> implements OnInit, OnChanges {

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  @Input() inputs?: Array<InputModel<T>>;
  @Input() config?: ConfigModel<T>;
  @Input() data?: Array<T>;

  extentInputs?: Array<InputExtendModel<T>>;

  formGroup: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.extentInputs = this.inputs as Array<InputExtendModel<T>>;
    this.extentInputs?.forEach(input => {
      if (input) {
        let inputName = input.Name?.toString().split('.')[input.Name?.toString().split('.').length - 1] as string;
        input.FormControlName = inputName;
        let form: FormControl = new FormControl(input.Value, input.Validations);
        this.formGroup?.addControl(inputName as string, form);
        input.FormControl = form;
      }
    });
    this.formGroup.valueChanges.subscribe(res => {
      debugger;
    });
  }

  ShowErrors(form: FormControl) {
    if (form.errors) {
      let k='';
      Object.keys(form.errors).forEach(key=>{
        k = `<span>${key}</span>`
      })

      return k;
    }else{
      return  null;
    }
  }


}
