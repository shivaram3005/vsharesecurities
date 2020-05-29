import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {

  constructor(private rout:Router) { }
  toWatchlist(){

  }
toLogout(){
  this.rout.navigateByUrl('./logout');
}
toOrders(){
this.rout.navigateByUrl('./login/orders');
}
toPortfolio(){
this.rout.navigateByUrl('./login/Portfolio');
}
toFunds(){
this.rout.navigateByUrl('./login/funds');
}
  ngOnInit(): void {
  }

}
