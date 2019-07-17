import { Component, OnInit } from '@angular/core';
import { Prices } from '../prices';
import { PricesService } from '../prices.service';

@Component({
  selector: 'app-add-prices',
  templateUrl: './add-prices.component.html',
  styleUrls: ['./add-prices.component.css']
})
export class AddPricesComponent implements OnInit {

  price:Prices = new Prices();

  constructor(private http:PricesService) { }

  ngOnInit() {
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
