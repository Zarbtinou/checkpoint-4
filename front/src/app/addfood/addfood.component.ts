import { Component, OnInit } from '@angular/core';
import { GetfoodService } from '../getfood.service';
import { Food } from '../food';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {

  food:Food= new Food();
  public param_Data:GetfoodService;

  constructor(private http:GetfoodService) { this.param_Data=http;}

  ngOnInit() {
  }

  save() {
    this.http.createFood(this.food)
    .subscribe(data => data, error=>error);
    this.food = new Food()
  }

  onSubmit() {
    this.save()
  }

}
