import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  login() {
    sessionStorage.setItem('AUTH_TOKEN', 'some-fake-token');
    this.activatedRoute.queryParams.subscribe(params => { 
      console.log(params);
      this.router.navigate([params.returnUrl]); 
    });
  }

}
