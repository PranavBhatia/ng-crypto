import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signout-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <button
      mat-flat-button
      color="accent"
      *ngIf="isLoggedIn"
      (click)="logout()"
    >
      Logout
    </button>
  `,
  styles: [],
})
export class SignoutButtonComponent {
  isLoggedIn: boolean = false;
  private subscription!: Subscription;

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.subscription = this.angularFireAuth.authState.subscribe((user) => {
      this.isLoggedIn = !!user;
    });
  }

  logout() {
    this.angularFireAuth.signOut();
    this.router.navigate(['auth', 'signup']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
