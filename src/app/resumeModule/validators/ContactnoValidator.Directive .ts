import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validators } from "@angular/forms";


@Directive({
    selector: '[contactValidator]',
    providers:[{provide:NG_VALIDATORS,
    useExisting:CheckContactValidator,
multi:true}]
})

export class CheckContactValidator implements Validators{
    validate(control: AbstractControl):{[key:string]:any}|null{
        return control.value < 100000 ? {'contacterror' : true}:null
    }
}