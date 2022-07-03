import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  Item :any = {
    "Id" : 1,
    "Name" : "CPU",
    "Type" : "Used",
    "Price" : 34000
  }

  constructor() { }

  ngOnInit(): void {
  }



}
