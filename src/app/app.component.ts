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

    this.Inputs=[
      {Name:x=>x.FirstName,Title:"First Name",Description:"Please set first name",InputType: InputType.Text,Validations: [Validators.required,Validators.minLength(10)]  } as InputModel<CustomerForm>,
      {Name:x=>x.LastName,Title:"Last Name",Description:"Please set last name",InputType: InputType.Text } as InputModel<CustomerForm>,
      {Name:x=>x.IsSingle,Title:"First Name",Description:"Please set first name",InputType: InputType.CheckBox } as InputModel<CustomerForm>,
      {Name:x=>x.PhoneNumber,Title:"Phone Number",Description:"Please set first name",InputType: InputType.PhoneNumber } as InputModel<CustomerForm>,
      {Name:x=>x.Email,Title:"Email",Description:"Please set first name",InputType: InputType.Email} as InputModel<CustomerForm>,
      {Name:x=>x.BirthDay,Title:"Birth Name",Description:"Please set birth name",InputType: InputType.Date } as InputModel<CustomerForm>,
      {Name:x=>x.BirthDay,Title:"Birth Name",Description:"Please set birth name",InputType: InputType.Date } as InputModel<CustomerForm>,
      {Name:x=>x.BirthDay,Title:"Birth Name",Description:"Please set birth name",InputType: InputType.DatePeriod } as InputModel<CustomerForm>,
      {Name:x=>x.BirthDay,Title:"Birth Name",Description:"Please set birth name",InputType: InputType.List,
        Child:[
          {Name:x=>x.BirthDay,Title:"One",InputType: InputType.Text },
          {Name:x=>x.BirthDay,Title:"Two",InputType: InputType.Text },
          {Name:x=>x.BirthDay,Title:"Three",InputType: InputType.Text }
        ] as Array<InputModel<CustomerForm>> } as InputModel<CustomerForm>,

      {Name:x=>x.FirstName,Title:"Insert",Description:"Please set first name" ,InputType: InputType.Button,onClick:(item)=>{
        }
      } as InputModel<CustomerForm>,

      {Name:x=>x.FirstName,Title:"Edit",Description:"Please set first name",Class:"btn-warning",InputType: InputType.Button,onClick:(item)=>{
        }
      } as InputModel<CustomerForm>,

      {Name:x=>x.FirstName,Title:"Delete",Description:"Please set first name",Class:"btn-danger",InputType: InputType.Button,onClick:(item)=>{
        }
      } as InputModel<CustomerForm>,

    ];

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

