import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';
import { getToken } from '../user';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  private router: Router;

  access:boolean = true;

  constructor(public loginService: TokenService) { }

  ngOnInit() {
  }
  onSubmit(value:any){
    let jsonObject = {
      "username": value.username,
      "password": value.password
    }
    this.loginService.login(jsonObject).subscribe(
      () => {
        if (getToken()!= null){
          this.access = false;
        }
      }
    );
  }
  logout(){
    this.loginService.logout();
    location.reload();
  }

}