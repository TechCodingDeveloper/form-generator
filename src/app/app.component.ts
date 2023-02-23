import {Component} from '@angular/core';
import {InputModel} from "./component/form-generation/models/input-model";
import {FormatType} from "./component/form-generation/models/format-model";
import {ConfigModel} from "./component/form-generation/models/config-model";
import {Validators} from "@angular/forms";

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
      {Name:x=>x.FirstName,Title:"First Name",Description:"Please set first name",Format: FormatType.Text,Validations: [Validators.required]  } as InputModel<CustomerForm>,
      {Name:x=>x.LastName,Title:"Last Name",Description:"Please set last name",Format: FormatType.Text } as InputModel<CustomerForm>,
      {Name:x=>x.IsSingle,Title:"First Name",Description:"Please set first name",Format: FormatType.CheckBox } as InputModel<CustomerForm>,
      {Name:x=>x.PhoneNumber,Title:"Phone Number",Description:"Please set first name",Format: FormatType.PhoneNumber } as InputModel<CustomerForm>,
      {Name:x=>x.Email,Title:"Email",Description:"Please set first name",Format: FormatType.Email} as InputModel<CustomerForm>,
      {Name:x=>x.BirthDay,Title:"Birth Name",Description:"Please set birth name",Format: FormatType.Date } as InputModel<CustomerForm>,
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

