import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export function uniqueNameValidator(http: HttpClient): AsyncValidatorFn {
    return function (control: AbstractControl): Observable<ValidationErrors> | null {
        const value = control.value;
        const url = "http://localhost:9000/checkName";
        const params = new HttpParams().set('name', value);
        return http.get<{ valid: boolean }>(url, { params: params })
            .pipe(
                map(result => result.valid ? null : { uniqueName: true })
            );
    }
}