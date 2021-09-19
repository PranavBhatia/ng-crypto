import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'crypto/:id',
    loadChildren: () => import('./crypto-details/crypto-details.module').then((m) => m.CryptoDetailsModule),
  },
  {
     path: 'auth/signup',
     loadChildren: () => import('./auth/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
