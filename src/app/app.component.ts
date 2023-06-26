import { Observable, Subscribable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgIf, AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    NgIf,
    RouterOutlet,
    AsyncPipe,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  isLoggedIn: boolean = false;
  private subscription!: Subscription;

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
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
