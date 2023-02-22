

export class ConfigModel<T> {
  Title?:string;
  AccessLevel:any;
  Edit?:((input:T)=>void);
  Delete?:((input:T)=>void);
  New?:((input:T)=>void);
  View?:((input:T)=>void);
  BeforLoad?:()=>void;
  AfterLoad?:()=>void;
}
