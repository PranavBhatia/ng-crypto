import { Component, OnInit } from '@angular/core';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    standalone: true,
    imports: [MatCardModule, SignupFormComponent]
})
export class SignupComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
