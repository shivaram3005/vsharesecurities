import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

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
