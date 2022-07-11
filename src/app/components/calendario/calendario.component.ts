import { Component, NgModule, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Horario } from 'src/app/interfaces/horario';
import { HorarioService } from 'src/app/services/horario.service';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
})

export class CalendarioComponent implements OnInit {

  horarios: Horario[]=[];

  constructor(private horarioservice:HorarioService) { }
  listHoras:any[]=[];
  ngOnInit(): void {
    for (let index = 0; index < 17; index++) {
      this.listHoras[index]=index+6;
    }
    this.horarioservice.getHorariosInfo().subscribe(
      e => {this.horarios=e; console.log(this.horarios)}
    );
  }
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

}
