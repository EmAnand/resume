import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validators } from "@angular/forms";

@Directive({
    selector: '[emailValidator]',
    providers: [{provide:NG_VALIDATORS,
    useExisting:checkEmailValidator,
    multi:true}]
})

export class checkEmailValidator implements Validators{
    validate(control: AbstractControl):{[key:string]:any} | null{
     //   return control.value != null ? null: {'passwordError' : true};
     
    //     var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    //     if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
    //         return { "Please provide a valid email": true };
    //     }

    //     return null;
    return validateEmail(control.value) != null ? null: { 'checkEmailkey': true}
    
    
   }     
};
let validateEmail = (email:any)=> {
    return String(email).toLowerCase().match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}
    