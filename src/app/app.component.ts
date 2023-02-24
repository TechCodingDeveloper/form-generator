import {Component} from '@angular/core';
import {InputModel} from "./component/form-generation/models/input-model";
import {InputType} from "./component/form-generation/models/format-model";
import {ConfigModel} from "./component/form-generation/models/config-model";
import {Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Data?: Array<CustomerForm>;

  Inputs?:Array<InputModel<CustomerForm>>;

  Config?:ConfigModel<CustomerForm>;

  constructor() {

    this.Data = new Array<CustomerForm>();

    this.Data.push({
      FirstName: "Alex",
      LastName: "Rock",
      BirthDay: new Date(1999, 2, 4),
      Email: "Email@yahoo.com",
      NationalCode: "0000-000-000",
      PhoneNumber: "+191512121"
    });

    this.Inputs = new Array<InputModel<CustomerForm>>();

    this.Inputs.push(
      {Name:x=>x.FirstName,Title:"First Name",Description:"Please set first name",Format: InputType.Text,Validations: [Validators.required,Validators.minLength(10)]  } as InputModel<CustomerForm>,
      {Name:x=>x.LastName,Title:"Last Name",Description:"Please set last name",Format: InputType.Text } as InputModel<CustomerForm>,
      {Name:x=>x.IsSingle,Title:"First Name",Description:"Please set first name",Format: InputType.CheckBox } as InputModel<CustomerForm>,
      {Name:x=>x.PhoneNumber,Title:"Phone Number",Description:"Please set first name",Format: InputType.PhoneNumber } as InputModel<CustomerForm>,
      {Name:x=>x.Email,Title:"Email",Description:"Please set first name",Format: InputType.Email} as InputModel<CustomerForm>,
      {Name:x=>x.BirthDay,Title:"Birth Name",Description:"Please set birth name",Format: InputType.Date } as InputModel<CustomerForm>,
      {Name:x=>x.BirthDay,Title:"Birth Name",Description:"Please set birth name",Format: InputType.Date } as InputModel<CustomerForm>,
      {Name:x=>x.BirthDay,Title:"Birth Name",Description:"Please set birth name",Format: InputType.DatePeriod } as InputModel<CustomerForm>,
      {Name:x=>x.BirthDay,Title:"Birth Name",Description:"Please set birth name",Format: InputType.List,
        Child:[
          {Name:x=>x.BirthDay,Title:"One",Format: InputType.Text },
          {Name:x=>x.BirthDay,Title:"Two",Format: InputType.Text },
          {Name:x=>x.BirthDay,Title:"Three",Format: InputType.Text }
        ] as Array<InputModel<CustomerForm>> } as InputModel<CustomerForm>,


    );

  }
}

export class CustomerForm {
  FirstName?: string;
  LastName?: string;
  NationalCode?: string;
  BirthDay?: Date;
  PhoneNumber?: string;
  Email?: string;
  IsSingle?:boolean=false;
}

