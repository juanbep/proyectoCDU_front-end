import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escenario } from 'src/app/interfaces/escenario';
import { Categoria } from 'src/app/interfaces/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { EscenarioService } from 'src/app/services/escenario.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-editar-gestion-escenario',
  templateUrl: './form-editar-gestion-escenario.component.html',
  styleUrls: ['./form-editar-gestion-escenario.component.css']
})
export class FormEditarGestionEscenarioComponent implements OnInit {
  escenario: Escenario = new Escenario();
  escenarioAux: Escenario = new Escenario();
  listCategorias: Categoria[] = [];
  auxCat: string = '';
  auxEstado: string[] = [];
  escenarios: Escenario[] = [];
  validacion: boolean = false;

  profileForm = new FormGroup({
    nombreEscenario: new FormControl(''),
    estadoEscenario: new FormControl(''),
    imagenEscenario: new FormControl(''),
    descripcionEscenario: new FormControl(''),
    categoriaEscenario: new FormControl(''),
  });

  constructor(private escenarioservice: EscenarioService,
    private route: Router,
    private activateRoute: ActivatedRoute,
    private categoriaservice: CategoriaService,
  ) { }

  ngOnInit(): void {
    this.cargarEscenario();
  }

  cargarEscenario(): void {
    this.activateRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.escenarioservice.getEscenario(id).subscribe(
            es => {
              this.escenario = es;
              console.log("Original ", es);
              this.escenario.escenarioEstado = es.escenarioEstado == '0' ? 'Inabilitado' : 'Habilitado';
              this.auxEstado.push(this.escenario.escenarioEstado);
              this.auxEstado.push(this.escenario.escenarioEstado == 'Habilitado' ? 'Inabilitado' : 'Habilitado');
            }
          );
        }
      }
    );
    this.categoriaservice.getCategoriasInfo().subscribe((e) => {
      this.listCategorias = e;
      for (let i = 0; i < this.listCategorias.length; i++) {
        this.auxCat = this.listCategorias[i].categoriaNombre;
      }
    });
  }

  onSubmit() {
    this.editarEscenario();
  }
  convertirEscenario(): void {
    this.escenarioAux.escenarioNombre = this.escenario.escenarioNombre;
    this.escenarioAux.escenarioDescripcion = this.profileForm.value.descripcionEscenario;
    this.escenarioAux.escenarioFoto = this.profileForm.value.imagenEscenario;
    if (this.profileForm.value.estadoEscenario == 'Habilitado') {
      this.escenarioAux.escenarioEstado = '1';
    } else {
      this.escenarioAux.escenarioEstado = '0';
    }
    this.escenarioAux.escenarioCategoria = this.escenario.escenarioCategoria;
    this.escenarioAux.escenarioUrl = this.escenario.escenarioUrl;
  }
  editarEscenario(): void {
    var resultado = window.confirm("¿Desea guardar los cambios?");
    if (resultado == true) {
      this.convertirEscenario();
      console.log(this.escenarioAux);
      this.escenarioservice.update(this.escenario.escenarioNombre, this.escenarioAux).subscribe(
        res => this.route.navigate(['/gestion_escenarios'])
      );
      window.alert("Cambios confirmados")
    } else {
      window.alert("Debe llenar los espacios")
    }
  }

  comprovarEscenario(nombre: string): boolean {
    
    this.escenarioservice.getEscenariosInfo().subscribe(
      e => {
        this.escenarios = e;
        for (let i = 0; i < this.escenarios.length; i++) {
          if (e[i].escenarioNombre == nombre) {
            this.validacion = true;
          }
        }
      }
    );
    return this.validacion;
  }
}
