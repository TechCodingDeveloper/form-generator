import {FormatType} from "./format-model";
import {FormControl, ValidatorFn} from "@angular/forms";


export class InputModel<T> {
  Name?: ((input: T) => void);
  Title?: string;
  InputType: any;
  Description?: string;
  Validations?: ValidatorFn[];
  Format?: FormatType;
  AccessLevel: any;
  Priority?: number;
  Value?: any;

}


export class InputExtendModel<T> extends InputModel<T> {
  FormControlName: string = '';
  FormControl:FormControl = new FormControl();
}
