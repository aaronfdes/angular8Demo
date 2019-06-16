import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  displayMessage: string;
  message:string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
    this.message = "Please log in";
  }

  change(){
    this.message="<h2>Please log in</h2>"
  }

  login() {
    if (this.formGroup.valid) {
      if (this.formGroup.get('username').value == 'admin' && this.formGroup.get('password').value == 'admin') {
        sessionStorage.setItem('AUTH_TOKEN', this.formGroup.get('username').value);
        const destinationUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
        if (destinationUrl) {
          this.router.navigate([destinationUrl]);
        } else {
          this.router.navigate(["home"]);
        }
      } else {
        this.displayMessage = "Invalid username/password";
      }
    }
  }

}
