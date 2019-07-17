import { Component, OnInit } from '@angular/core';
import { PricesService } from '../prices.service';
import { Prices } from '../prices';

@Component({
  selector: 'app-getprices',
  templateUrl: './getprices.component.html',
  styleUrls: ['./getprices.component.css']
})
export class GetpricesComponent implements OnInit {

  data:Prices[];
  public param_Data:PricesService;
  

  constructor(private myparam_service:PricesService) {
    this.param_Data=myparam_service;
    
   }

  ngOnInit() {
    
    this.myparam_service.getPrices().subscribe(
      (param_data:Prices[]) =>{
        this.data =param_data
      }
    )
    
  }
    
      
      
    
  }


