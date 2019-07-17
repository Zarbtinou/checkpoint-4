import { Component, OnInit } from '@angular/core';
import { Prices } from '../prices';
import { PricesService } from '../prices.service';

@Component({
  selector: 'app-configurationpannel',
  templateUrl: './configurationpannel.component.html',
  styleUrls: ['./configurationpannel.component.css']
})
export class ConfigurationpannelComponent implements OnInit {
  price:Prices = new Prices();

  data:Prices[];
  public param_Data:PricesService;

  constructor(private http:PricesService) { this.param_Data=http;}

  ngOnInit() {
    this.http.getPrices().subscribe(
      (param_data:Prices[]) =>{
        this.data =param_data
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

  

  

}
