
# Form Generation Angular!
**form-generation** easy way to create dynamic form with Angular .
# Implement
       <app-form-generation [inputs]="Inputs" [config]="Config" >  </app-form-generation>
## pircture

![enter image description here](https://github.com/devnozari/form-generator/blob/main/Screenshot%202023-02-25%20124654.png?raw=true)


## Example


```bash
 export class Customer {  
          FirstName?: string;  
          LastName?: string;  
        }

```


```bash
 Inputs?:Array<InputModel<Customer>>;  
 Config?:ConfigModel<Customer>;
```


    
```bash
this.Inputs = new Array<InputModel<Customer>>();  
```
        
```bash
this.Inputs=[  
      {Name:x=>x.FirstName,Title:"First Name",Description:"Please set first name",InputType: InputType.Text,Validations: [Validators.required,Validators.minLength(10)]  } as InputModel<Customer>,  
      {Name:x=>x.LastName,Title:"Last Name",Description:"Please set last name",InputType: InputType.Text } as InputModel<Customer>,  
     
      {Name:x=>x.FirstName,Title:"Insert",Description:"Please set first name",InputType:InputType.Button,onClick:(item)=>{  
          console.log("insert",item);  
        }  
      } as InputModel<Customer>,  
      
      ]; 
```
## Defination

### Input Type
| name | decription  |
|--|--|
| Text | create text input  |
| Number | create Number input  |
| PhoneNumber| create phone number input  |
| Email| create Email  input  |
| Date| create Date picker input  |
| CheckBox| create CheckBox  input  |
| Radio| create Radio input  |
| List| create List  select element  |
| DatePeriod| create Date picker input  |
| Button| create Button  |

