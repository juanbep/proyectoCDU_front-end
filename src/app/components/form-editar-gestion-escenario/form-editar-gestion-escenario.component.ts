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

  constructor(private escenarioservice: EscenarioService, private route: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarEscenario();
  }

  cargarEscenario(): void {
    this.activateRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.escenarioservice.getEscenario(id).subscribe(
            es => this.cancha = es
          );
        }   
      }
    );
  }
  editarEscenario(): void {
    this.escenarioservice.update(this.cancha).subscribe(
      res=> this.route.navigate(['/escenarios'])
    );
    
  }

}
