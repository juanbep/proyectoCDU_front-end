import { Component, OnInit } from '@angular/core';
import { Escenario } from 'src/app/interfaces/escenario';
import { EscenarioService } from 'src/app/services/escenario.service';

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css']
})
export class CanchasComponent implements OnInit {

  escenariosCDU: Escenario[]=[];

  constructor(private escenarioservice:EscenarioService) { }

  ngOnInit(): void {
    this.escenarioservice.getEscenariosInfo().subscribe(
      e => {this.escenariosCDU=e; console.log(this.escenariosCDU)}
    );
  }

}
