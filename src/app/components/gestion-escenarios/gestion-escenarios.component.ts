import { Component, OnInit } from '@angular/core';
import { Escenario } from 'src/app/interfaces/escenario';
import { EscenarioService } from 'src/app/services/escenario.service';

@Component({
  selector: 'app-gestion-escenarios',
  templateUrl: './gestion-escenarios.component.html',
  styleUrls: ['./gestion-escenarios.component.css']
})
export class GestionEscenariosComponent implements OnInit {
  
  escenarios: Escenario[]=[];
  
  constructor(private escenarioservice:EscenarioService) { }

  ngOnInit(): void {
    this.escenarioservice.getEscenariosInfo().subscribe(
      e => {this.escenarios=e; console.log(this.escenarios)}
    );
    
  }
  
  eliminarEscenario(escenario:Escenario){
    this.escenarioservice.delete(escenario.escenarioNombre).subscribe(
      res=>this.escenarioservice.getEscenariosInfo().subscribe(
        Response=>this.escenarios=Response
      )
    );
  }

}
