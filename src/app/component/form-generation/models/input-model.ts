import {InputType} from "./format-model";
import {AsyncValidatorFn, FormControl, FormControlOptions, ValidatorFn} from "@angular/forms";


export class InputModel<T> {
  Name?: ((input: T) => void);
  Title?: string;
  InputType: any;
  Description?: string;
  Validations?: ValidatorFn | ValidatorFn[] | FormControlOptions | null;
  Format?: InputType;
  AccessLevel: any;
  Priority?: number;
  Value?: any;
  Child?:Array<InputModel<T>>
}


export class InputExtendModel<T> extends InputModel<T> {
  FormControlName: string = '';
  FormControl:FormControl = new FormControl();
}
