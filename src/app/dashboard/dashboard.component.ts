import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { mergeMapTo } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private afMessaging: AngularFireMessaging) {}

  ngOnInit(): void {}

  // requestPermission() {
  //   this.afMessaging.requestPermission.subscribe(
  //     () => {
  //       console.log('Permission granted!');
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  requestPermission() {
    this.afMessaging.requestToken.subscribe(
      (token) => {
        console.log('Permission granted! Save to the server!', token);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
