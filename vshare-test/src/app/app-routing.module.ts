import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import {OrdersComponent} from './orders/orders.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FundsComponent } from './funds/funds.component';
import { LogoutComponent } from './logout/logout.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'./login/watchlist',component:AfterLoginComponent},
  {path:'./login/orders',component:OrdersComponent},
  {path:'./login/Portfolio',component:PortfolioComponent},
  {path:'./login/funds',component:FundsComponent},
  {path:'./logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
