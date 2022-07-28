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
  aux4: string = '';

  opcionSeleccionadoInicio:number=0;
  verSeleccionInicio:number= 0;

  opcionSeleccionadoFin:number=0;
  verSeleccionFin:number= 0;

  opcionSeleccionadoEstudId:number=0;
  verEstudianteId:number= 0;

  opcionSeleccionadoProgId:number=0;
  verProgramaId:number= 0;

  opcionSeleccionadoInicioDate=new Date;
  varFechaInicio:Date=new Date;

  opcionSeleccionadoFinDate=new Date;
  varFechaFin:Date=new Date;

  listHorasInicio: any[] = [];
  listHorasFin: any[] = [];

  listDias: any[] =[
    { nombre: "Lunes", checked: false },
    { nombre: "Martes", checked: false },
    { nombre: "Miercoles", checked: false },
    { nombre: "Jueves", checked: false },
    { nombre: "Viernes", checked: false },
    { nombre: "Sabado", checked: false },
    { nombre: "Domingo", checked: false }
  ];

  listDiasAux: any[] =[];

  constructor(
    private HorarioService : HorarioService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.mostrarHorarioInicio()
  }

  onSubmit() {
    this.mostrardias(); 
  }

  /**
   *createHorario(): void {
    this.horarioAux.horarioHoraInicio = this.horarioForm.value.horarioHoraInicio;
    this.horarioAux.horarioHoraFin = this.horarioForm.value.horarioHoraFin;
    this.horarioAux.horarioDia = this.horarioForm.value.horarioDia;
    this.horarioAux.horarioFechaInicio = this.horarioForm.value.horarioFechaInicio;
    this.horarioAux.horarioFechaFin = this.horarioForm.value.horarioFechaFin;

    this.HorarioService.create(this.horarioAux).subscribe((res) => this.route.navigate(['/calendario']));
    }
   */

  mostrarHorarioInicio():void{
    for (let index = 0; index < 17; index++) {
      this.listHorasInicio[index] = index+6;
    }
    console.log('gonorrea', this.listHorasInicio.length);
  }

  mostrarHorarioFin():void{
    let varAux=0
    this.listHorasFin = []

    for (let index = 0; index < this.listHorasInicio.length; index++) {
      if(this.listHorasInicio[index]>=this.verSeleccionInicio){
        if(this.listHorasFin[varAux] == 22 ){
          break
        }else{
          this.listHorasFin[varAux] = this.listHorasInicio[index]
          varAux = varAux + 1
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

  obtenerDias():void{
    let index = 0;

    if(this.listDias[0] == true){
      this.listDiasAux[index] = "lunes"
      index = index++;
    }

    if(this.listDias[1] == true){
      this.listDiasAux[index] = "martes"
      index = index++;
    }

    if(this.listDias[2] == true){
      this.listDiasAux[index] = "miercoles"
      index = index++;
    }

    if(this.listDias[3] == true){
      this.listDiasAux[index] = "jueves"
      index = index++;
    }

    if(this.listDias[4] == true){
      this.listDiasAux[index] = "viernes"
      index = index++;
    }

    if(this.listDias[5] == true){
      this.listDiasAux[index] = "sabado"
      index = index++;
    }

    if(this.listDias[6] == true){
      this.listDiasAux[index] = "domingo"
      index = index++;
    }
  }

  capturarProgramaId() {
    this.verProgramaId = this.opcionSeleccionadoProgId;
    console.log('hora prueba inicio', this.verProgramaId);
  }

  capturarEstudianteId() {
    this.verEstudianteId = this.opcionSeleccionadoEstudId;
    console.log('hora prueba inicio', this.verEstudianteId);
  }

  capturarHoraInicio() {
    this.verSeleccionInicio = this.opcionSeleccionadoInicio;
    console.log('hora prueba inicio', this.verSeleccionInicio);
  }

  capturarHoraFin() {
    this.verSeleccionFin = this.opcionSeleccionadoFin;
    console.log('hora prueba inicio', this.verSeleccionFin);
  }

  capturarFechasInicio(){
    this.varFechaInicio = this.opcionSeleccionadoInicioDate;
    console.log('hora prueba inicio', this.varFechaInicio);
  }

  capturarFechasFin(){
    this.varFechaFin = this.opcionSeleccionadoFinDate;
    console.log('hora prueba inicio', this.varFechaFin);
  }
}
