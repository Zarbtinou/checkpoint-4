import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UsersService } from './user.service';
import { Observable } from 'rxjs';
import { Food } from './food';
import { map } from 'rxjs/operators';


const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
 };
@Injectable({
  providedIn: 'root'
})
export class GetfoodService {

  constructor(private http: HttpClient, private service: UsersService) { }

  public getOptions():any {
    let options:any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.service.getToken()
      })
    }
  
    return options;
  }

  getFoods():Observable<Food[]>{
    return this.http.get("http://localhost:8080/foods").pipe(
      map(
        (param_data:any) => {
          return param_data as Food[];
        }
      )
    )
  }

  createFood( myfood:Food):Observable<object> {
    return this.http.post("http://localhost:8080/foods", myfood, this.getOptions());
  
  }

  deleteFood(id:number):Observable<any>{
    return this.http.delete("http://localhost:8080/foods/"+id);
  }

}
