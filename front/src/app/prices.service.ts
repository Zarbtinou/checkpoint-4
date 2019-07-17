import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prices } from './prices';
import { map } from 'rxjs/operators';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
 };
@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor(private http: HttpClient) {}

  createPrice(Prices:object):Observable<object> {
    return this.http.post("http://localhost:8080/prices", Prices)
  }

  

}
