import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-reset',
    templateUrl: './reset.component.html',
    styleUrls: ['./reset.component.css'],
    standalone: true,
    imports: [MatCardModule, NgIf, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule]
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
