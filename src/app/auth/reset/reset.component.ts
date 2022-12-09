import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
})
export class ResetComponent implements OnInit {
  isPasswordResetCodeSent: boolean = false;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  // onReset(resetForm: NgForm) {
  //   this.httpClient
  //     .post(
  //       `https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key==${environment.firebaseApiKey}`,
  //       { ...resetForm.value, requestType: 'PASSWORD_RESET' }
  //     )
  //     .subscribe(
  //       () => {
  //         this.snackBar.open('Password Reset Successful', 'Ok', {
  //           verticalPosition: 'top',
  //           horizontalPosition: 'center',
  //           panelClass: 'bg-success',
  //         });
  //         this.router.navigate(['auth/login']);
  //       },
  //       (error) => {
  //         let errorMessage = 'Operation Failed - ' + error.error.error.message;

  //         this.snackBar.open(errorMessage, 'Ok', {
  //           verticalPosition: 'top',
  //           horizontalPosition: 'center',
  //           panelClass: 'bg-danger',
  //         });
  //       }
  //     );
  // }

  onSendPasswordResetCode(resetForm: NgForm) {
    this.httpClient
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${environment.firebaseApiKey}`,
        { ...resetForm.value, requestType: 'PASSWORD_RESET' }
      )
      .subscribe(
        () => {
          this.snackBar.open('Email Sent.', 'Ok', {
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: 'bg-success',
          });
          this.isPasswordResetCodeSent = true;
          this.router.navigate(['auth/login']);
        },
        (error) => {
          let errorMessage = 'Operation Failed - ' + error.error.error.message;

          this.snackBar.open(errorMessage, 'Ok', {
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: 'bg-danger',
          });
        }
      );
  }
}
