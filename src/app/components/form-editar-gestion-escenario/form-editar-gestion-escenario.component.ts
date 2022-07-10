import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escenario } from 'src/app/interfaces/escenario';
import { EscenarioService } from 'src/app/services/escenario.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-editar-gestion-escenario',
  templateUrl: './form-editar-gestion-escenario.component.html',
  styleUrls: ['./form-editar-gestion-escenario.component.css']
})
export class FormEditarGestionEscenarioComponent implements OnInit {
  //escenario: Escenario = new Escenario();
  escenario: Escenario = new Escenario();
  escenarioAux: Escenario = new Escenario();

  profileForm = new FormGroup({
    nombreEscenario: new FormControl(''),
    estadoEscenario: new FormControl(''),
    imagenEscenario: new FormControl(''),
    descripcionEscenario: new FormControl(''),
  });

  constructor(private escenarioservice: EscenarioService,
    private route: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
     
    this.cargarEscenario();
  }

  aux: string[] = [];
  cargarEscenario(): void {
    this.activateRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.escenarioservice.getEscenario(id).subscribe(
            es => {
              console.log(this.escenarioAux)
              this.escenario = es;
              this.escenario.escenarioEstado = es.escenarioEstado == '0' ? 'Inabilitado' : 'Habilitado';
              this.aux.push(this.escenario.escenarioEstado);
              this.aux.push(this.escenario.escenarioEstado == 'Habilitado' ? 'Inabilitado' : 'Habilitado');

            }
          );
        }
      }
    );
  }
  editarEscenario(): void {
    this.convertirEscenario();
    console.log("estado", this.escenarioAux.escenarioEstado), console.log("categoría", this.escenario.escenarioCategoria)
    this.escenarioservice.update(this.escenario.escenarioNombre, this.escenarioAux).subscribe(
      res => this.route.navigate(['/escenarios'])
    );
  }
  onSubmit() {
    console.warn(this.profileForm.value); //en this.profileForm.value tenemos el valor del form para poder manipularlo a nuestro gusto. Si queremos acceder a, por ejemplo, un control especifico, podemos hacerlo con this.profileForm.controls['nombreControl']
  }
  convertirEscenario(): void {
    this.escenarioAux.escenarioNombre = this.profileForm.value.nombreEscenario;
    this.escenarioAux.escenarioDescripcion = this.profileForm.value.descripcionEscenario;
    this.escenarioAux.escenarioFoto = this.profileForm.value.imagenEscenario;
    if(this.profileForm.value.estadoEscenario=='Habilitado'){
      this.escenarioAux.escenarioEstado = '1';
    }
    if(this.profileForm.value.estadoEscenario=='Inabilitado'){
      this.escenarioAux.escenarioEstado = '0';
    }
    this.escenarioAux.escenarioCategoria = this.escenario.escenarioCategoria;
  }

}
