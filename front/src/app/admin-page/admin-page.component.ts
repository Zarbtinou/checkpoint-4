import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  private router: Router;

  access:boolean = true;

  constructor(public loginService: TokenService, public service: UsersService) { }

  ngOnInit() {
  }
  onSubmit(value:any){
    if(this.access = true){
      this.access = false;
    }else{
      this.access = true;
    }
    let jsonObject = {
      "username": value.username,
      "password": value.password
    }
    this.loginService.login(jsonObject).subscribe(
      () => {
        if (this.service.getToken()!= null){
          
        }
      }
    );

 
  }
  logout(){
    this.loginService.logout();
    location.reload();
  }

}