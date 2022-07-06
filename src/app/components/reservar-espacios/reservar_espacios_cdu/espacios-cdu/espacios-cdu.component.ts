import { Component, OnInit } from '@angular/core';
import { Escenario } from 'src/app/interfaces/escenario';
import { EscenarioService } from 'src/app/services/escenario.service';

@Component({
  selector: 'app-espacios-cdu',
  templateUrl: './espacios-cdu.component.html',
  styleUrls: ['./espacios-cdu.component.css']
})
export class EspaciosCduComponent implements OnInit {


  escenarios: Escenario[]=[];

  constructor(private escenarioservice:EscenarioService) { }

  ngOnInit(): void {
    this.escenarioservice.getEscenariosInfo().subscribe(
      e => {this.escenarios=e; console.log(this.escenarios)}
    );
  }

}
