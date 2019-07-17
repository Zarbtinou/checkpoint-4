import { Component, OnInit } from '@angular/core';
import { Prices } from '../prices';
import { PricesService } from '../prices.service';
import { Food } from '../food';
import { GetfoodService } from '../getfood.service';

@Component({
  selector: 'app-configurationpannel',
  templateUrl: './configurationpannel.component.html',
  styleUrls: ['./configurationpannel.component.css']
})
export class ConfigurationpannelComponent implements OnInit {
  price:Prices = new Prices();
  data:Prices[];
  public param_Data:PricesService;

  data1:Food[];
  public param_Data1:GetfoodService;

  constructor(private http:PricesService, private myparam_service:GetfoodService) { this.param_Data=http; this.param_Data1=myparam_service;}

  ngOnInit() {
    this.http.getPrices().subscribe(
      (param_data:Prices[]) =>{
        this.data =param_data
      }
    )

    this.myparam_service.getFoods().subscribe(
      (param_data:Food[]) =>{
        this.data1 =param_data
      }
    )
    }
  

  save() {
    this.http.createPrice(this.price)
    .subscribe(data => data, error=>error);
    this.price = new Prices()
  }

  onSubmit() {
    this.save()
  }

  deletePrice(id:number) {
    
    this.http.deletePrice(id).subscribe(data => {

    })
  }

  deleteFood(id:number) {
    
    this.myparam_service.deleteFood(id).subscribe(data => {

    })
  }

  

}
