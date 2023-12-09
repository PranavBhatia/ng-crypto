import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { CryptoDetailsComponent } from './crypto-details.component';

@Injectable({ providedIn: 'root' })
export class ResolvedChildAtTitle  {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string {
    return `Crypto - ${route.paramMap.get('id')}`;
  }
}

const routes: Routes = [
  { path: '', title: ResolvedChildAtTitle, component: CryptoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoDetailsRoutingModule {}
