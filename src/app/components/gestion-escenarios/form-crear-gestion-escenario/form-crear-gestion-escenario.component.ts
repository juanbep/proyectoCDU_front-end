import { Component, OnInit, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core'; 
import { Router} from '@angular/router';
import { EscenarioService } from 'src/app/services/escenario.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Escenario } from 'src/app/interfaces/escenario';
import { Categoria } from 'src/app/interfaces/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-form-crear-gestion-escenario',
  templateUrl: './form-crear-gestion-escenario.component.html',
  styleUrls: ['./form-crear-gestion-escenario.component.css']
})

export class FormCrearGestionEscenarioComponent implements OnInit {

  escenario: Escenario = new Escenario();
  escenarioAux: Escenario = new Escenario();
  aux: string ="";
  profileForm = new FormGroup({
    escenarioNombre: new FormControl(''),
    escenarioDescripcion: new FormControl(''),
    escenarioFoto: new FormControl(''),
    estadoEscenario: new FormControl(''),
    escenarioCategoria: new FormControl(''),
  });

  constructor(private escenarioservice: EscenarioService, private categoriaservice: CategoriaService,
    private route: Router,
  ) { }

  listCategorias:Categoria[]=[];

  ngOnInit(): void {
    this.categoriaservice.getCategoriasInfo().subscribe(
      e => {this.listCategorias=e;
      for(let i=0; i<this.listCategorias.length; i++){
          this.aux =this.listCategorias[i].categoriaNombre;
          console.log("varnombre",this.aux);
      }
    }
    );
  }

  onSubmit() {
    console.warn(this.profileForm.value); 
    this.createEscenario();
  }

  createEscenario(): void {
    this.convertirEscenario();
    console.log("estado", this.escenarioAux.escenarioEstado), console.log("categoría", this.escenario.escenarioCategoria)
    this.escenarioservice.create(this.escenarioAux).subscribe(
      res => this.route.navigate(['/escenarios'])
    );
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
