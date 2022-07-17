import { Component, OnInit } from '@angular/core';
import { Escenario } from 'src/app/interfaces/escenario';
import { EscenarioService } from 'src/app/services/escenario.service';

@Component({
  selector: 'app-espacios-diamante',
  templateUrl: './espacios-diamante.component.html',
  styleUrls: ['./espacios-diamante.component.css']
})
export class EspaciosDiamanteComponent implements OnInit {

  escenariosDiamante: Escenario[]=[];

  constructor(private escenarioservice:EscenarioService) { }

  ngOnInit(): void {
    this.escenarioservice.getEscenariosInfo().subscribe(
      e => {this.escenariosDiamante=e; console.log(this.escenariosDiamante)}
    );
  }

}
