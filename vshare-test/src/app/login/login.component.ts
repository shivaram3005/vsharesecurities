import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
 constructor(public route:Router) {
   
   }
   onButtonClick(){
      this.route.navigateByUrl('./login/watchlist');
     }


  ngOnInit(): void {
  }

}
