import {MessageContract} from "./input-model";


export class ConfigModel<T> {
  Title?:string;
  AccessLevel:any;
  beforeLoad?:()=>void;
  afterLoad?:()=>void;
  onChange?:((item:MessageContract<T>)=>void)
}
