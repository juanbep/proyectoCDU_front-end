import { Component, OnInit } from '@angular/core';
import { Escenario } from 'src/app/interfaces/escenario';
import { EscenarioService } from 'src/app/services/escenario.service';

@Component({
  selector: 'app-form-editar-gestion-escenario',
  templateUrl: './form-editar-gestion-escenario.component.html',
  styleUrls: ['./form-editar-gestion-escenario.component.css']
})
export class FormEditarGestionEscenarioComponent implements OnInit {

  escenarios: Escenario[]=[];
  constructor(private escenarioservice:EscenarioService) { }

  ngOnInit(): void {
    this.escenarioservice.getEscenariosInfo().subscribe(
      e => {this.escenarios=e; console.log(this.escenarios)}
    );
  }

}
