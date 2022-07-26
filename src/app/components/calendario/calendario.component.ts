import { Component, NgModule, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, Renderer2,
AfterViewInit} from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Horario } from 'src/app/interfaces/horario';
import { HorarioService } from 'src/app/services/horario.service';
import { Data } from '@angular/router';
import { SelectorContext } from '@angular/compiler';
import { style } from '@angular/animations';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';


declare function greet(): void;

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
})
export class CalendarioComponent  implements AfterViewInit{
  
  horarios: Horario[] = [];
  myScriptElement: HTMLScriptElement;

  @ViewChild('lunes18', {static : false}) title : any ;
     
  public texto: string = "";

  constructor(private horarioservice: HorarioService, private renderer2: Renderer2) {
    this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = 'src/assets/js/horario.js';
    document.body.appendChild(this.myScriptElement);
  }

  ngAfterViewInit(): void {
    const asTitle = this.title.nativeElement;
    this.renderer2.setStyle(asTitle, 'background-color', 'red');
  }

  listHoras: any[] = [];
  ngOnInit(): void {
    for (let index = 0; index < 17; index++) {
      this.listHoras[index] = index + 6;
    }
    this.horarioservice.getHorariosInfo().subscribe((e) => {
      this.horarios = e;
      console.log(this.horarios);
    });
    this.texto = "hola mundo";
    
  }

  change(): void{
    const asTitle = this.title.nativeElement;
    this.renderer2.setStyle(asTitle, 'background-color', 'red');
  }

  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}
