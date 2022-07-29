import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HorarioPK } from 'src/app/interfaces/horario-pk';
import { Horario } from 'src/app/interfaces/horario';
import { HorarioService } from 'src/app/services/horario.service';
import { ProgramaService } from 'src/app/services/programa.service';
import { Programa } from 'src/app/interfaces/programa';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-form-agregar-horario',
  templateUrl: './form-agregar-horario.component.html',
  styleUrls: ['./form-agregar-horario.component.css'],
})
export class FormAgregarHorarioComponent implements OnInit {
  horarioPk: HorarioPK = new HorarioPK();
  listaHorarioPk: any[] = [];
  horario: Horario = new Horario();

  opcionSeleccionadoInicio: number = 0;
  verSeleccionInicio: number = 0;

  opcionSeleccionadoFin: number = 0;
  verSeleccionFin: number = 0;

  opcionSeleccionadoEstudId: number = 0;
  verEstudianteId: number = 0;

  opcionSeleccionadoProgId: number = 0;
  verProgramaId: number = 0;

  opcionSeleccionadoInicioDate = new Date();
  varFechaInicio: Date = new Date();

  opcionSeleccionadoFinDate = new Date();
  varFechaFin: Date = new Date();

  listHorasInicio: any[] = [];
  listHorasFin: any[] = [];

  listDias: any[] = [
    { nombre: 'Lunes', checked: false },
    { nombre: 'Martes', checked: false },
    { nombre: 'Miercoles', checked: false },
    { nombre: 'Jueves', checked: false },
    { nombre: 'Viernes', checked: false },
    { nombre: 'Sabado', checked: false },
    { nombre: 'Domingo', checked: false },
  ];

  listDiasAux: any[] = [];
  listProgramas: Programa[] = [];
  listEstudiante: Usuario[] = [];

  aux: any
  aux2: any

  constructor(private HorarioService: HorarioService, 
              private programaService: ProgramaService,
              private usuarioService: UsuarioService,
              private route: Router) {}

  ngOnInit(): void {
    this.programaService.getProgramaInfo().subscribe((e) => {
      this.listProgramas = e;
      for (let i = 0; i < this.listProgramas.length; i++) {
        this.aux = this.listProgramas[i].programaId;
        console.log('Id de programas: ', this.aux);
      }
    });

    this.usuarioService.getEstudianteInfo().subscribe((e) => {
      this.listEstudiante = e;
      for (let i = 0; i < this.listEstudiante.length; i++) {
        this.aux2 = this.listEstudiante[i].id;
        console.log('Id de estudiantes: ', this.aux2);
      }
    });

    this.mostrarHorarioInicio();
    this.createHorario();
  }

  createHorarioPk(): void {
    console.log('Entrando a crear horario pk');
    this.horarioPk.horarioHoraInicio = this.verSeleccionInicio;
    this.horarioPk.horarioHoraFin = this.verSeleccionFin;
    this.horarioPk.horarioFechaInicio = this.varFechaInicio;
    this.horarioPk.horarioFechaFin = this.varFechaFin;

    for (let index = 0; index < this.listDiasAux.length; index++) {
      this.horarioPk.horarioDia = this.listDiasAux[index];
      console.log('dias ', this.listDiasAux[index]);
      this.listaHorarioPk[index] = this.horarioPk;
    }
    this.imprimirHoraPk();
  }

  createHorario() {
    console.log('Entrando a crear horario');

    this.obtenerDias();
    this.createHorarioPk();
    this.horario.horarioEstado = 'fijo';
    //this.horario.programaId = this.verProgramaId;
    //this.horario.usuarioId = this.verEstudianteId;

    for (let index = 0; index < this.listaHorarioPk.length; index++) {
      this.horario.pk = this.listaHorarioPk[index];
      this.HorarioService.create(this.horario).subscribe((res) =>
        this.route.navigate(['/calendario'])
      );
      this.imprimirHora()
    }
  }

  mostrarHorarioInicio(): void {
    console.log('Entrando a mostrar hora inicio');

    for (let index = 0; index < 17; index++) {
      this.listHorasInicio[index] = index + 6;
    }
  }

  mostrarHorarioFin(): void {
    console.log('Entrando a mostrar hora fin');

    let varAux = 0;
    this.listHorasFin = [];

    for (let index = 0; index < this.listHorasInicio.length; index++) {
      if (this.listHorasInicio[index] >= this.verSeleccionInicio) {
        if (this.listHorasFin[varAux] == 22) {
          break;
        } else {
          this.listHorasFin[varAux] = this.listHorasInicio[index];
          varAux = varAux + 1;
        }
      }
    }
  }

  mostrardias(): void {
    console.log('Entrando a mostrar dias', this.listDiasAux.length);
    for (let index = 0; index < this.listDiasAux.length; index++) {
      console.log('dias prueba', this.listDiasAux[index]);
    }
  }

  obtenerDias(): void {
    console.log('Entrando a obtener dias');
    let index = 0;
    this.listDiasAux = [];

    if (this.listDias[0].checked == true) {
      this.listDiasAux[index] = 'lunes';
      index = index + 1;
    }

    if (this.listDias[1].checked == true) {
      this.listDiasAux[index] = 'martes';
      index = index + 1;
    }

    if (this.listDias[2].checked == true) {
      this.listDiasAux[index] = 'miercoles';
      index = index + 1;
    }

    if (this.listDias[3].checked == true) {
      this.listDiasAux[index] = 'jueves';
      index = index + 1;
    }

    if (this.listDias[4].checked == true) {
      this.listDiasAux[index] = 'viernes';
      index = index + 1;
    }

    if (this.listDias[5].checked == true) {
      this.listDiasAux[index] = 'sabado';
      index = index + 1;
    }

    if (this.listDias[6].checked == true) {
      this.listDiasAux[index] = 'domingo';
      index = index + 1;
    }
    this.mostrardias();
  }

  capturarProgramaId() {
    console.log('Entrando a obtener programa id');
    this.verProgramaId = this.opcionSeleccionadoProgId;
    console.log('programa id: ', this.verProgramaId);
  }

  capturarEstudianteId() {
    console.log('Entrando a obtener estudiante id');
    this.verEstudianteId = this.opcionSeleccionadoEstudId;
    console.log('estudiante id: ', this.verEstudianteId);
  }

  capturarHoraInicio() {
    console.log('Entrando a capturar hora inicio');
    this.verSeleccionInicio = this.opcionSeleccionadoInicio;
    console.log('hora inicio: ', this.verSeleccionInicio);
  }

  capturarHoraFin() {
    console.log('Entrando a capturar hora fin');
    this.verSeleccionFin = this.opcionSeleccionadoFin;
    console.log('hora fin', this.verSeleccionFin);
  }

  capturarFechasInicio() {
    console.log('Entrando a capturar fecha inicio');
    this.varFechaInicio = this.opcionSeleccionadoInicioDate;
    console.log('fecha inicio: ', this.varFechaInicio);
  }

  capturarFechasFin() {
    console.log('Entrando a capturar fecha fin');
    this.varFechaFin = this.opcionSeleccionadoFinDate;
    console.log('fecha fin: ', this.varFechaFin);
  }

  imprimirHoraPk() {
    console.log('Entrando a imprimir objeto hora pk');
    for (let index = 0; index < this.listaHorarioPk.length; index++) {
      console.log('Objeto hora pk: ', this.listaHorarioPk[index]);
    }
  }

  imprimirHora() {
    console.log('Entrando a imprimir objeto hora');
    console.log('Objeto hora pk: ', this.horario);
  }

  getProgramaId(){

  }
}
