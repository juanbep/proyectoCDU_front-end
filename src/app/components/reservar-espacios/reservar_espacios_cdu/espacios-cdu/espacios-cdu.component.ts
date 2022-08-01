import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Escenario } from 'src/app/interfaces/escenario';
import { EscenarioService } from 'src/app/services/escenario.service';

@Component({
  selector: 'app-espacios-cdu',
  templateUrl: './espacios-cdu.component.html',
  styleUrls: ['./espacios-cdu.component.css']
})
export class EspaciosCduComponent implements OnInit {

  @ViewChild('cards', { static: false }) public card: any;
  @ViewChildren('cards') public misCards!: QueryList<ElementRef>;

  escenariosCDU: Escenario[]=[];

  constructor(private escenarioservice:EscenarioService) { }

  ngOnInit(): void {
    this.escenarioservice.getEscenariosInfo().subscribe(
      e => {this.escenariosCDU=e; console.log(this.escenariosCDU)}
    );
    console.log(this.card.get.nativeElement);
  }

}
