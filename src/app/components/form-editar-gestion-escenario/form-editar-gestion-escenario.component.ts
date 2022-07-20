import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escenario } from 'src/app/interfaces/escenario';
import { EscenarioService } from 'src/app/services/escenario.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Categoria } from 'src/app/interfaces/categoria';

@Component({
  selector: 'app-form-editar-gestion-escenario',
  templateUrl: './form-editar-gestion-escenario.component.html',
  styleUrls: ['./form-editar-gestion-escenario.component.css']
})
export class FormEditarGestionEscenarioComponent implements OnInit {
  //escenario: Escenario = new Escenario();
  escenario: Escenario = new Escenario();
  categoria: Categoria = new Categoria();
  escenarioAux: Escenario = new Escenario();

  profileForm = new FormGroup({
    nombreEscenario: new FormControl(''),
    estadoEscenario: new FormControl(''),
    imagenEscenario: new FormControl(''),
    descripcionEscenario: new FormControl(''),
    categoriaEscenario: new FormControl(''),
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
              this.escenario = es;
              console.log(es.escenarioCategoria.categoriaDescripcion);
              
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
    var resultado = window.confirm("¿Desea guardar los cambios?");
    if(resultado==true){
      this.convertirEscenario();
      console.log(this.escenarioAux);      
      this.escenarioservice.update(this.escenario.escenarioNombre, this.escenarioAux).subscribe(
        res => this.route.navigate(['/gestion_escenarios'])
      );
      window.alert("Cambios confirmados")
    }
  }
  onSubmit() {
    //console.warn(this.profileForm.value); //en this.profileForm.value tenemos el valor del form para poder manipularlo a nuestro gusto. Si queremos acceder a, por ejemplo, un control especifico, podemos hacerlo con this.profileForm.controls['nombreControl']
    this.convertirEscenario();
  
    //console.log(this.escenarioAux);
  }
  convertirEscenario(): void {
    this.obtenerInfoCategoria();
    this.escenarioAux.escenarioNombre = this.profileForm.value.nombreEscenario; 
    this.escenarioAux.escenarioDescripcion = this.profileForm.value.descripcionEscenario;
    this.escenarioAux.escenarioFoto = this.profileForm.value.imagenEscenario;
    if (this.profileForm.value.estadoEscenario == 'Habilitado') {
      this.escenarioAux.escenarioEstado = '1';
    }else{
      this.escenarioAux.escenarioEstado = '0';
    }
    /*this.escenarioAux.categoriaEscenario= this.escenario.escenarioCategoria;*/
    //console.log(this.escenario)
   
  }
  obtenerInfoCategoria(){
    //this.categoria.categoriaNombre=this.escenario.escenarioCategoria.categoriaNombre;
    console.log(this.escenario.escenarioCategoria);
  }

}
