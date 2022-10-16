import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FirebaseModule } from 'src/app/shared/firebase/firebase.module';

@NgModule({
  declarations: [SignupComponent, SignupFormComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    FirebaseModule,
    MatButtonModule,
    MatFormFieldModule,
    SignupRoutingModule,
    ReactiveFormsModule,
  ],
})
export class SignupModule {}
