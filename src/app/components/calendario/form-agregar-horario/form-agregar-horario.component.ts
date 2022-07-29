import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HorarioPK } from 'src/app/interfaces/horario-pk';
import { Horario } from 'src/app/interfaces/horario';
import { HorarioService } from 'src/app/services/horario.service';
import { ProgramaService } from 'src/app/services/programa.service';
import { Programa } from 'src/app/interfaces/programa';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';
import { EscenarioService } from 'src/app/services/escenario.service';
import { Escenario } from 'src/app/interfaces/escenario';

@Component({
  selector: 'app-form-agregar-horario',
  templateUrl: './form-agregar-horario.component.html',
  styleUrls: ['./form-agregar-horario.component.css'],
})
export class FormAgregarHorarioComponent implements OnInit {

  horarioPk: HorarioPK = new HorarioPK();
  horario: Horario = new Horario();
  escenario: Escenario = new Escenario();

  opcionSeleccionadoInicio: number = 0;
  verSeleccionInicio: number = 0;

  opcionSeleccionadoFin: number = 0;
  verSeleccionFin: number = 0;

  opcionSeleccionadoUsuarioId: number = 0;
  verUsuarioId: number = 0;

  opcionSeleccionadoProgId: number = 0;
  verProgramaId: number = 0;

  opcionSeleccionadoInicioDate = new Date();
  varFechaInicio: Date = new Date();

  opcionSeleccionadoFinDate = new Date();
  varFechaFin: Date = new Date();

  listHorasInicio: any[] = [];
  listHorasFin: any[] = [];
  listDiasAux: any[] = [];
  listaHorarioPk: any[] = [];

  listDias: any[] = [
    { nombre: 'Lunes', checked: false },
    { nombre: 'Martes', checked: false },
    { nombre: 'Miercoles', checked: false },
    { nombre: 'Jueves', checked: false },
    { nombre: 'Viernes', checked: false },
    { nombre: 'Sabado', checked: false },
    { nombre: 'Domingo', checked: false },
  ];

  listProgramas: Programa[] = [];
  programaAux: Programa = new Programa();

  listUsuario: Usuario[] = [];
  usuarioAux: Usuario = new Usuario()

  listEscenarios: Escenario[] = [];
  escenarioAux: Escenario = new Escenario()

  aux: any
  aux2: any

  constructor(private HorarioService: HorarioService, 
              private programaService: ProgramaService,
              private usuarioService: UsuarioService,
              private escenarioservice: EscenarioService,
              private route: Router) {}

  ngOnInit(): void {
    this.getPrograma();
    this.getUsuario();
    this.getEscenario();

    this.imprimirProgramas();
    this.imprimirUsuario();

    this.mostrarHorarioInicio();
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
    this.getObjPrograma();
    this.getObjUsuario();
    this.getObjEscenario();

    this.horario.horarioEstado = 'fijo';
    this.horario.horarioPrograma = this.programaAux;
    this.horario.horarioUsuario = this.usuarioAux;
    this.horario.horarioEscenario = this.escenarioAux;

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
    this.verUsuarioId = this.opcionSeleccionadoUsuarioId;
    console.log('estudiante id: ', this.verUsuarioId);
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

  imprimirProgramas() {
    console.log('Entrando a imprimir programas');
    for (let i = 0; i < this.listProgramas.length; i++) {
      this.aux = this.listProgramas[i].programaId;
      console.log('Id de programas: ', this.aux);
    }
  }

  imprimirUsuario() {
    console.log('Entrando a imprimir usuarios');
    for (let i = 0; i < this.listUsuario.length; i++) {
      this.aux2 = this.listUsuario[i].id;
      console.log('Id de estudiantes: ', this.aux2);
    }
  }

  imprimirEscenario() {
    console.log('Entrando a imprimir escenarios');
    for (let i = 0; i < this.listEscenarios.length; i++) {
      console.log('Id de Escenarios: ', this.listEscenarios[i]);
    }
  }

  getEscenario(){
    this.escenarioservice.getEscenariosInfo().subscribe((e) => {
      this.listEscenarios = e;
    });
  }

  getPrograma(){
    this.programaService.getProgramaInfo().subscribe((e) => {
      this.listProgramas = e;
    });
  }

  getUsuario(){
    this.usuarioService.getUsuarioInfo().subscribe((e) => {
      this.listUsuario = e;
    });
  }

  getObjPrograma(){
    console.log('Entrando a get obj programa');
    for(let index = 0 ; index < this.listProgramas.length ; index++){
      if(this.listProgramas[index].programaId == this.verProgramaId){
          console.log('Entrando al if');
          Object.assign(this.programaAux, this.listProgramas[index])
      }
    }
  }

  getObjUsuario(){
    console.log('Entrando a get obj usuario');
    for(let index = 0 ; index < this.listUsuario.length ; index++){
      if(this.listUsuario[index].id == this.verUsuarioId){
        Object.assign(this.usuarioAux , this.listUsuario[index])
      }
    }
  }

  getObjEscenario(){
    console.log('Entrando a get obj escenario');
    for(let index = 0 ; index < this.listEscenarios.length ; index++){
      if(this.listEscenarios[index].escenarioNombre == "Cancha de Fútbol"){
        Object.assign(this.escenarioAux , this.listEscenarios[index])
      }
    }
  }
}
