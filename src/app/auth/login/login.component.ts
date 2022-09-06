import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    this.httpClient
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseApiKey}`,
        { ...loginForm.value, returnSecureToken: true }
      )
      .subscribe(
        () => {
          this.snackBar.open('Login Successful', 'Ok', {
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: 'bg-success',
          });
          this.router.navigate(['/']);
        },
        (error) => {
          let errorMessage = 'Login Failed - ' + error.error.error.message;

          this.snackBar.open(errorMessage, 'Ok', {
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: 'bg-danger',
          });
        }
      );
  }
}
