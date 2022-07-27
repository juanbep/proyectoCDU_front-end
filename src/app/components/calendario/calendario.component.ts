import {
  Component,
  NgModule,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Renderer2,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from '@angular/core';
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
export class CalendarioComponent implements AfterViewInit {
  horarios: Horario[] = [];
  myScriptElement: HTMLScriptElement;

  @ViewChild('martes18', { static: false }) public celda: any;
  @ViewChildren('celda') public misCeldas!: QueryList<ElementRef>;

  public texto: string = '';
  //public horarioDia: string = "";
  //public horarioHoraInicio!: number;
  public celdaAux: string = '';

  constructor(
    private horarioservice: HorarioService,
    private renderer2: Renderer2
  ) {
    this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = 'src/assets/js/horario.js';
    document.body.appendChild(this.myScriptElement);
  }

  ngAfterViewInit(): void {
    //const asCelda = this.celda.nativeElement;
    //this.renderer2.setStyle(asCelda, 'background-color', 'red');
    let colores = [
      'cyan',
      'black',
      'blue',
      'brown',
      'gold',
      'gray',
      'green',
      'magenta',
      'orange',
      'pink',
      'purple',
      'red',
      'silver',
      'turquoise',
      'yellow',
    ];
    let cont: number = 0;
    this.horarioservice.getHorariosInfo().subscribe((e) => {
      this.horarios = e;
      //console.log(this.horarios);
      this.horarios.forEach((elemento) => {
        this.celdaAux = elemento.pk.horarioDia + elemento.pk.horarioHoraInicio;
        //console.log(this.celdaAux);
        let i: number;
        for (i = 0; i < this.misCeldas.length; i++) {
          //const celda5 = elemento.nativeElement.getAttribute('id');
          const idCelda = this.misCeldas
            .get(i)
            ?.nativeElement.getAttribute('id');
          //console.log(idCelda);
          if (idCelda == this.celdaAux) {
            //console.log(idCelda);
            const asCelda = this.misCeldas.get(i)?.nativeElement;
            this.renderer2.setStyle(asCelda, 'background-color', colores[cont]);
            break;
          }
          cont++;
          if(cont > colores.length){
            cont = 0;
          }
          //this.renderer2.setStyle(celdas, 'background-color', colores[8]);
        }
      });
    });

    /*this.misCeldas.forEach((elemento) => {
      //const celdas = elemento.nativeElement.getAttribute('id');
      const celdas = elemento.nativeElement;
      //console.log(celdas);
      this.renderer2.setStyle(celdas, 'background-color', colores[8]);
    });*/
  }

  listHoras: any[] = [];
  ngOnInit(): void {
    for (let index = 0; index < 17; index++) {
      this.listHoras[index] = index + 6;
    }
    /*this.horarioservice.getHorariosInfo().subscribe((e) => {
      this.horarios = e;
      console.log(this.horarios);
    });*/
    //this.texto = "hola mundo";
  }

  change(): void {
    const asCelda = this.celda.nativeElement;
    this.renderer2.setStyle(asCelda, 'background-color', 'red');
  }

  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}
