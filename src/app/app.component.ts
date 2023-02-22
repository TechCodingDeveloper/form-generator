import {Component} from '@angular/core';
import {InputModel} from "./component/form-generation/models/input-model";
import {FormatType} from "./component/form-generation/models/format-model";
import {ConfigModel} from "./component/form-generation/models/config-model";

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
      {Name:x=>x.FirstName,Title:"First Name",Description:"Please set first name",Format: FormatType.Text,Required:true } as InputModel<CustomerForm>,
      {Name:x=>x.LastName,Title:"Last Name",Description:"Please set last name",Format: FormatType.Text,Required:true } as InputModel<CustomerForm>,
      {Name:x=>x.PhoneNumber,Title:"First Name",Description:"Please set first name",Format: FormatType.PhoneNumber,Required:true } as InputModel<CustomerForm>,
      {Name:x=>x.Email,Title:"First Name",Description:"Please set first name",Format: FormatType.Email,Required:true } as InputModel<CustomerForm>,
      {Name:x=>x.BirthDay,Title:"Birth Name",Description:"Please set birth name",Format: FormatType.Date,Required:true } as InputModel<CustomerForm>,
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
}

