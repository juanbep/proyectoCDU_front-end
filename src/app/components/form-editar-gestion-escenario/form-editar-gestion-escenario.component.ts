import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escenario } from 'src/app/interfaces/escenario';
import { EscenarioService } from 'src/app/services/escenario.service';

@Component({
  selector: 'app-form-editar-gestion-escenario',
  templateUrl: './form-editar-gestion-escenario.component.html',
  styleUrls: ['./form-editar-gestion-escenario.component.css']
})
export class FormEditarGestionEscenarioComponent implements OnInit {
  //escenario: Escenario = new Escenario();
  cancha: Escenario = new Escenario();
  estado: string = "";

  constructor(private escenarioservice: EscenarioService, private route: Router, private activateRoute: ActivatedRoute) { }

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
              console.log(es);

              this.cancha = es;
              this.cancha.escenarioEstado = es.escenarioEstado == '0' ? 'Inabilitado' : 'Habilitado';
              //this.aux = es.escenarioEstado=='1'?'Inabilitado':'Habilitado';
              this.aux.push(this.cancha.escenarioEstado);
              this.aux.push(this.cancha.escenarioEstado == 'Habilitado' ? 'Inabilitado' : 'Habilitado');

            }
          );
        }
      }
    );
  }
  create(): void {
    console.log(this.cancha)
  }
  editarEscenario(): void {
    this.escenarioservice.update(this.cancha).subscribe(
      res => this.route.navigate(['/escenarios'])
    );

  }

}
