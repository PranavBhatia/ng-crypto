import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, Validators, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  CrossFieldErrorMatcher,
  confirmPasswordValidator,
} from './confirm-password.directive';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  errorMatcher = new CrossFieldErrorMatcher();

  signupForm: UntypedFormGroup = new UntypedFormGroup(
    {
      name: new UntypedFormControl('', [Validators.required]),
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      password: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      confirmPassword: new UntypedFormControl('', [Validators.required]),
    },
    { validators: confirmPasswordValidator }
  );

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('signupForm', this.signupForm.value);

    this.httpClient
      .post(
        'https://angular-crypto-test-default-rtdb.firebaseio.com/users.json',
        this.signupForm.value
      )
      .subscribe(
        (response) => {
          console.log('response', response);
          this.signupForm.reset();
          this.router.navigate(['../', 'login'], {
            relativeTo: this.activatedRoute,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
