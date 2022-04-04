import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isError = false;

  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  public login() {
    const { userName, password } = this.loginForm.value;
    if (userName === 'admin' && password === 'hello123') {
      this.router.navigateByUrl('/home');
      localStorage.setItem('token', 'test');
    } else {
      this.isError = true;
    }

  }

}
