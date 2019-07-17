import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Prices } from '../prices';
import { PricesService } from '../prices.service';

@Component({
  selector: 'app-contact-prices',
  templateUrl: './contact-prices.component.html',
  styleUrls: ['./contact-prices.component.css']
})
export class ContactPricesComponent implements OnInit {
  data:Prices[];
  public param_Data:PricesService;
  constructor(private myparam_service:PricesService) { this.param_Data=myparam_service;}

  ngOnInit() {
    const myfrugalmap = L.map('frugalmap').setView([51.507322, -0.127647], 16);
 
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(myfrugalmap);
  const myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png',
    iconSize: [25,41],
    iconAnchor: [12.5,41]
  });
  L.marker([51.508322, -0.127647], {icon: myIcon}).bindPopup('<strong>Wild Circus</strong>,<br/>The most popular circus of the world !<br/>').addTo(myfrugalmap).openPopup();
  

  this.myparam_service.getPrices().subscribe(
    (param_data:Prices[]) =>{
      this.data =param_data
    }
  )
  }

}
