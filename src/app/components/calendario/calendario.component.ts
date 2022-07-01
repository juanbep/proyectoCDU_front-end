import { Component, NgModule, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';




@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
})



export class CalendarioComponent implements OnInit {

  constructor() { }
  listHoras:any[]=[];
  ngOnInit(): void {
    for (let index = 0; index < 17; index++) {
      this.listHoras[index]=index+6;
    }

  }
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

}
