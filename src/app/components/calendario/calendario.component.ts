import { Component, NgModule, OnInit, Input } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Horario } from 'src/app/interfaces/horario';
import { HorarioService } from 'src/app/services/horario.service';

declare function greet(): void;

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
})

export class CalendarioComponent implements OnInit {

  horarios: Horario[]=[];
  myScriptElement: HTMLScriptElement;

  celda: string = "lunes8";

  constructor(private horarioservice:HorarioService) {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "src/assets/js/horario.js";
    document.body.appendChild(this.myScriptElement);
  }

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
