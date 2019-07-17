import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { GetfoodService } from '../getfood.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  data:Food[];
  public param_Data:GetfoodService;

  constructor(private myparam_service:GetfoodService) { this.param_Data=myparam_service;}

  ngOnInit() {
    this.myparam_service.getFoods().subscribe(
      (param_data:Food[]) =>{
        this.data =param_data
      }
    )
    }
  }


