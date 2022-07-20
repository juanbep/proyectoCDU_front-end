import {
  Component,
  OnInit,
  ɵclearResolutionOfComponentResourcesQueue,
} from '@angular/core';
import { Router } from '@angular/router';
import { EscenarioService } from 'src/app/services/escenario.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Escenario } from 'src/app/interfaces/escenario';
import { Categoria } from 'src/app/interfaces/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { left } from '@popperjs/core';

@Component({
  selector: 'app-form-crear-gestion-escenario',
  templateUrl: './form-crear-gestion-escenario.component.html',
  styleUrls: ['./form-crear-gestion-escenario.component.css'],
})
export class FormCrearGestionEscenarioComponent implements OnInit {

  escenario: Escenario = new Escenario();
  escenarioAux: Escenario = new Escenario();
  aux: string = '';

  profileForm = new FormGroup({
    escenarioNombre: new FormControl('',[Validators.required]),
    escenarioDescripcion: new FormControl('',[Validators.required]),
    escenarioFoto: new FormControl('',[Validators.required]),
    estadoEscenario: new FormControl('',[Validators.required]),
    escenarioCategoria: new FormControl('',[Validators.required]),
  });

  constructor(
    private escenarioservice: EscenarioService,
    private categoriaservice: CategoriaService,
    private route: Router
  ) {}

  listCategorias: Categoria[] = [];

  ngOnInit(): void {
    this.categoriaservice.getCategoriasInfo().subscribe((e) => {
      this.listCategorias = e;
      for (let i = 0; i < this.listCategorias.length; i++) {
        this.aux = this.listCategorias[i].categoriaNombre;
        console.log('varnombre', this.aux);
      }
    });
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.createEscenario();
  }

  createEscenario(): void {
    this.escenarioAux.escenarioNombre = this.profileForm.value.escenarioNombre;
    this.escenarioAux.escenarioDescripcion = this.profileForm.value.escenarioDescripcion;
    this.escenarioAux.escenarioFoto = this.profileForm.value.escenarioFoto;
    this.escenarioAux.escenarioEstado = this.profileForm.value.estadoEscenario;
    this.getCategoria();

    console.log('estado', this.escenarioAux.escenarioEstado),

    this.escenarioservice.create(this.escenarioAux).subscribe((res) => this.route.navigate(['/gestion_escenarios']));
  }

  getCategoria(): void {
    for (let i = 0; i < this.listCategorias.length; i++) {
      if (this.listCategorias[i].categoriaNombre == this.profileForm.value.escenarioCategoria) {
        this.escenarioAux.escenarioCategoria = this.listCategorias[i];
      }
    }
  }
}
