import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    this.httpClient
      .get('https://angular-crypto-test-default-rtdb.firebaseio.com/users.json')
      .subscribe((users) => {
        console.log(users);
      });
  }
}
