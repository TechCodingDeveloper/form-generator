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

  Inputs?:Array<InputModel<CustomerForm>>;

  Config?:ConfigModel<CustomerForm>;

  constructor() {

    this.Inputs = new Array<InputModel<CustomerForm>>();

    this.Inputs=[
      {Name:x=>x.FirstName,Title:"First Name",Description:"Please set first name",InputType: InputType.Text,Validations: [Validators.required,Validators.minLength(10)]  } as InputModel<CustomerForm>,
      {Name:x=>x.LastName,Title:"Last Name",Description:"Please set last name",InputType: InputType.Text } as InputModel<CustomerForm>,
      {Name:x=>x.IsMarried,Title:"Are you Married",Description:"Please set married status",InputType: InputType.CheckBox } as InputModel<CustomerForm>,
      {Name:x=>x.PhoneNumber,Title:"Phone Number",Description:"Please set first name",InputType: InputType.PhoneNumber,Validations:[Validators.required, Validators.pattern('^[a-zA-Z0-9_-]*$')]} as InputModel<CustomerForm>,
      {Name:x=>x.Email,Title:"Email",Description:"Please set first name",InputType: InputType.Email,Validations:[Validators.email,Validators.required]} as InputModel<CustomerForm>,
      {Name:x=>x.BirthDay,Title:"Birth Name",Description:"Please set birth name",InputType: InputType.Date } as InputModel<CustomerForm>,
      {Name:x=>x.PeriodWorkWithSite,Title:"period work with site",Description:"Please set period work with site",InputType: InputType.DatePeriod } as InputModel<CustomerForm>,
      {Name:x=>x.List,Title:"Birth Name",Description:"Please set birth name",InputType: InputType.List,
        Child:[
          {Name:x=>x.Radio,Title:"One",Value:"One",InputType: InputType.Text },
          {Name:x=>x.Radio,Title:"Two",Value:"Two",InputType: InputType.Text },
          {Name:x=>x.Radio,Title:"Three",Value:"Three",InputType: InputType.Text }
        ] as Array<InputModel<CustomerForm>> } as InputModel<CustomerForm>,

      {Name:x=>x.Radio,Title:"Radio",Description:"Please set Radio",InputType: InputType.Radio,
        Child:[
          {Name:x=>x.Radio,Title:"One",Value:"One",InputType: InputType.Text },
          {Name:x=>x.Radio,Title:"Two",Value:"Two",InputType: InputType.Text },
          {Name:x=>x.Radio,Title:"Three",Value:"Three",InputType: InputType.Text }
        ] as Array<InputModel<CustomerForm>> } as InputModel<CustomerForm>,

      {Name:x=>x.FirstName,Title:"Insert",Description:"Please set first name" ,InputType: InputType.Button,onClick:(item)=>{
          console.log("insert",item);
        }
      } as InputModel<CustomerForm>,

      {Name:x=>x.FirstName,Title:"Edit",Description:"Please set first name",Class:"btn-warning",InputType: InputType.Button,onClick:(item)=>{
          console.log("edit",item);
        }

      } as InputModel<CustomerForm>,

      {Name:x=>x.FirstName,Title:"Delete",Description:"Please set first name",Class:"btn-danger",InputType: InputType.Button,onClick:(item)=>{
          console.log("delete",item);
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
  PeriodWorkWithSite?: Date;
  PhoneNumber?: string;
  Email?: string;
  IsMarried?:boolean=false;
  List?:Array<string>;
  Radio?:string;
}

