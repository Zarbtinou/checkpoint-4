import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public userToken:string;
  constructor() {
    this.userToken = null;
   }

  public getToken(){
    console.log(this.userToken)
    return 'Bearer ' +this.userToken;
  }

  public setToken(token:string){
    this.userToken = token;
  }
} 