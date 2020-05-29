import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { OrdersComponent } from './orders/orders.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FundsComponent } from './funds/funds.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    
    SignupComponent,
    
    AfterLoginComponent,
    
    OrdersComponent,
    
    PortfolioComponent,
    
    FundsComponent,
    
    LogoutComponent,
    
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
