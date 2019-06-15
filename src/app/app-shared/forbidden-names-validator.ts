import { ValidatorFn, AbstractControl, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

// use this for dynamic forms
export function forbiddenNamesValidator(forbiddenNames: Array<string>): ValidatorFn {
    return function (control: AbstractControl): ValidationErrors | null {
        return forbiddenNames.includes(control.value) ? { forbidden: true } : null;
    }
}


//use this for template forms
@Directive({
    selector: '[forbiddenNames]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenNamesValidatorDirective, multi: true }]
})
export class ForbiddenNamesValidatorDirective implements Validator {


    @Input()
    forbiddenNames: string[]; // same name as selector

    validate(control: AbstractControl): ValidationErrors {
        //return this.forbiddenNames.includes(control.value) ? { forbidden: true } : null;
        return forbiddenNamesValidator(this.forbiddenNames)(control);
    }

    // registerOnValidatorChange?(fn: () => void): void {
    //     throw new Error("Method not implemented.");
    // }

}