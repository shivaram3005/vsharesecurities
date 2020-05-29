import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route:Router){};
 
  buttonwasClicked: boolean = false;
  val=false;
val1=true;




toLogin(){
   this.route.navigateByUrl('login');
   this.val=true;
   this.val1=false;
  }
  tosignup(){
    this.route.navigateByUrl('signup');
    this.val=true;
    this.val1=false;
  }
}
