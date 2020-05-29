import { Component, OnInit } from '@angular/core';
import  {Router} from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private rout:Router) { }
    toLogin(){
this.rout.navigateByUrl('login');
}
  ngOnInit(): void {
  }

}
