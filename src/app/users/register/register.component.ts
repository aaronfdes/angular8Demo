import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenNamesValidator } from 'src/app/app-shared/forbidden-names-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {

    this.registerFormGroup = new FormGroup({
      userName: new FormControl("", [Validators.required, Validators.minLength(3), forbiddenNamesValidator(["admin", "fucker", "sujay"])], []),
      password: new FormControl("", [Validators.required, Validators.minLength(6)], []),
      email: new FormControl("", [Validators.required, , Validators.email], []),
      contact: new FormControl("", [], [])
    })

  }

  register() {

    if (this.registerFormGroup.valid) {
      alert('form is valid');
    } else {
      alert('form isnt valid');
    }

  }

}
