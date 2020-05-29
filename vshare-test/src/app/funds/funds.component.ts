import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {
  constructor(private rout:Router) { }
  toWatchlist(){
    this.rout.navigateByUrl('./login/watchlist');
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
