import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prices } from './prices';
import { map } from 'rxjs/operators';
import { UsersService } from './user.service';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
 };

 

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor(private http: HttpClient, private service: UsersService) {
    
  }

public getOptions():any {
  let options:any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.service.getToken()
    })
  }

  return options;
}


  createPrice( myprice:Prices):Observable<object> {
    return this.http.post("http://localhost:8080/prices", myprice, this.getOptions());
  
  }


  getPrices():Observable<Prices[]> {
    return this.http.get("http://localhost:8080/prices").pipe(
      map(
       ( param_data:any) => {
         return param_data as Prices[];
       }
      )
    )
  }



}
