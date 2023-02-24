import {InputType} from "./format-model";
import {AsyncValidatorFn, FormControl, FormControlOptions, ValidatorFn} from "@angular/forms";


export class InputModel<T> {
  Name?: ((input: T) => void);
  Title?: string;
  Description?: string;
  Validations?: ValidatorFn | ValidatorFn[] | FormControlOptions | null;
  InputType?: InputType;
  AccessLevel: any;
  Priority?: number;
  Value?: any;
  Child?:Array<InputModel<T>>;
  Class?:string;
  onClick?: ((input: MessageContract<T>) => void);
  onLoad?: ((input: MessageContract<T>) => void);

}


export class InputExtendModel<T> extends InputModel<T> {
  FormControlName: string = '';
  FormControl:FormControl = new FormControl();
}

export class  MessageContract<T> {
  Data?:T ;
  Error?:MessageErrorContract;
}

export class  MessageErrorContract {
  Message?:string;
}
