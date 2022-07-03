import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  Items: Array<any> = [
    {
      "Id": 1,
      "Name": "CPU I3",
      "Type": "Used",
      "Price": 34000
    },
    {
      "Id": 2,
      "Name": "CPU I5",
      "Type": "Used",
      "Price": 35000
    },
    {
      "Id": 3,
      "Name": "CPU I7",
      "Type": "Brand new",
      "Price": 340000
    },
    {
      "Id": 4,
      "Name": "CPU I3",
      "Type": "Used",
      "Price": 30000
    },
    {
      "Id": 5,
      "Name": "CPU I9",
      "Type": "Brand new",
      "Price": 440000
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
