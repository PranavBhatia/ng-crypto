import { Observable, Subscribable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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

  constructor(private router: Router, private breakpointObserver: BreakpointObserver, private angularFireAuth: AngularFireAuth) { }

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
    this.subscription.unsubscribe()
  }
}
