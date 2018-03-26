/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-planner-info',
  templateUrl: './trip-planner-info.component.html',
  styleUrls: ['./trip-planner-info.component.scss']
})
export class TripPlannerInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/
import {Component} from '@angular/core';

@Component({
  selector: 'app-trip-planner-info',
  templateUrl: './trip-planner-info.component.html',
})
export class TripPlannerInfoComponent {
  listOne: Array<string> = ['Tokyo FIRST PLACE', 'TOKYO SECOND PLACE'];
  tripData: Array<string> = ['Trip one TITLE', 'Trip two TITLE'];


  itemDragged(i){
    console.log("ITEM DRAGGED" , i);
  }
  itemSwapped(i){
    console.log("itemSwapped" , i);
  }
}
