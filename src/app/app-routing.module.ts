import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputNumberComponent } from './card/input-number/input-number.component';
import { InputPinComponent } from './card/input-pin/input-pin.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './card/home/home.component';
import { AccountDetailComponent } from './card/account-detail/account-detail.component';
import { WithdrawComponent } from './card/withdraw/withdraw.component';

const routes: Routes = [
  { path: 'card/number', component: InputNumberComponent },
  { path: 'card/pin', component: InputPinComponent },
  { path: 'card/home', component: HomeComponent },
  { path: 'card/withdraw', component: WithdrawComponent },
  { path: 'card/account-detail', component: AccountDetailComponent },
  { path: 'error', component: ErrorComponent },
  { path: '',   redirectTo: '/card/number', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
