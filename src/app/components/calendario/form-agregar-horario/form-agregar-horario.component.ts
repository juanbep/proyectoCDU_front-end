import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HorarioPK } from 'src/app/interfaces/horario-pk';
import { HorarioService } from 'src/app/services/horario.service';

@Component({
  selector: 'app-form-agregar-horario',
  templateUrl: './form-agregar-horario.component.html',
  styleUrls: ['./form-agregar-horario.component.css']
})
export class FormAgregarHorarioComponent implements OnInit {

  horario: HorarioPK = new HorarioPK();
  horarioAux: HorarioPK = new HorarioPK();
  aux: string = '';

  opcionSeleccionadoInicio:number=0;
  verSeleccionInicio:number= 0;

  opcionSeleccionadoFin:number=0;
  verSeleccionFin:number= 0;

  listHorasInicio: any[] = [];
  listHorasFin: any[] = [];
  aux4: string = '';

  listDias: any[] =[
    { nombre: "Lunes", checked: false },
    { nombre: "Martes", checked: false },
    { nombre: "Miercoles", checked: false },
    { nombre: "Jueves", checked: false },
    { nombre: "Viernes", checked: false },
    { nombre: "Sabado", checked: false },
    { nombre: "Domingo", checked: false }
  ];

  horarioForm = new FormGroup({
    horarioHoraInicio: new FormControl('',[Validators.min(1)]),
    horarioHoraFin: new FormControl('',[Validators.required]),
    horarioDia: new FormControl('',[Validators.required]),
    horarioFechaInicio: new FormControl('',[Validators.required]),
    horarioFechaFin: new FormControl('',[Validators.required]),
  });

  constructor(
    private HorarioService : HorarioService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.mostrarHorarioInicio();
    this.mostrarHorarioFin();
    
  }

  onSubmit() {
    console.warn(this.horarioForm.value);

    this.createHorario();

    this.mostrardias(); 
  }

  createHorario(): void {
    this.horarioAux.horarioHoraInicio = this.horarioForm.value.horarioHoraInicio;
    this.horarioAux.horarioHoraFin = this.horarioForm.value.horarioHoraFin;
    this.horarioAux.horarioDia = this.horarioForm.value.horarioDia;
    this.horarioAux.horarioFechaInicio = this.horarioForm.value.horarioFechaInicio;
    this.horarioAux.horarioFechaFin = this.horarioForm.value.horarioFechaFin;

    /**
     * this.HorarioService.create(this.horarioAux).subscribe((res) => this.route.navigate(['/calendario']));
     */
  }

  mostrarHorarioInicio():void{
    for (let index = 0; index < 17; index++) {
      this.listHorasInicio[index] = index+6;
    }
  }

  mostrarHorarioFin = () => {
    let varAux=0
    for (let index = 0; index < this.listHorasInicio.length; index++) {
      if(index+2 <= this.listHorasInicio.length){
        if(this.listHorasInicio[index] == this.verSeleccionInicio){
          this.listHorasFin[varAux] = this.listHorasInicio[index + 1]
          this.listHorasFin[varAux + 1] = this.listHorasInicio[index + 2]
        }
      }
    }
  }

  mostrardias():void{
    for (let index = 0; index < 17; index++) {
      this.aux4= this.listDias[index];
      console.log('dias prueba', this.aux4);
    }
  }

  capturarHoraInicio() {
    this.verSeleccionInicio = this.opcionSeleccionadoInicio;
    console.log('hora prueba inicio', this.verSeleccionInicio);
  }

  capturarHoraFin() {
    this.verSeleccionFin = this.opcionSeleccionadoFin;
    console.log('hora prueba inicio', this.verSeleccionFin);
  }
}
