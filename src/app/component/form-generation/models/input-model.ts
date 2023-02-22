import {FormatType} from "./format-model";


export class  InputModel<T> {
  Name?: ((input: T) => void);
  Title?:string;
  InputType:any;
  Description?:string;
  Required:boolean=false;
  Validation:any;
  Format?:FormatType;
  AccessLevel:any;
  Priority?:number;
  Value:any;
}
