import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputNumberComponent } from './card/input-number/input-number.component';
import { InputPinComponent } from './card/input-pin/input-pin.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './card/home/home.component';
import { WithdrawComponent } from './card/withdraw/withdraw.component';
import { AccountDetailComponent } from './card/account-detail/account-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InputNumberComponent,
    InputPinComponent,
    ErrorComponent,
    HomeComponent,
    WithdrawComponent,
    AccountDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
