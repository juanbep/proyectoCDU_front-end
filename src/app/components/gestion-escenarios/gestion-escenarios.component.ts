import { Component, OnInit } from '@angular/core';
import { Escenario } from 'src/app/interfaces/escenario';
import { EscenarioService } from 'src/app/services/escenario.service';

@Component({
  selector: 'app-gestion-escenarios',
  templateUrl: './gestion-escenarios.component.html',
  styleUrls: ['./gestion-escenarios.component.css'],
})
export class GestionEscenariosComponent implements OnInit {
  escenarios: Escenario[] = [];
 
  constructor(private escenarioservice: EscenarioService) {
    
  }
  ngOnInit(): void {
    this.escenarioservice.getEscenariosInfo().subscribe((e) => {
      this.escenarios = e;
      console.log(this.escenarios);
      for (let i = 0; i < this.escenarios.length; i++) {
        if (e[i].escenarioEstado == '1') {
          this.escenarios[i].escenarioEstado = 'Habilitado';
        }
        if (e[i].escenarioEstado == '0') {
          this.escenarios[i].escenarioEstado = 'Deshabilitado';
        }
      }
    });
  }

  eliminarEscenario(escenario: Escenario) {
    var resultado = window.confirm(
      '¿está seguro de eliminar el escenario [' +
        escenario.escenarioNombre +
        '] ?'
    );
    if (resultado == true) {
      this.escenarioservice
        .delete(escenario.escenarioNombre)
        .subscribe((res) =>
          this.escenarioservice
            .getEscenariosInfo()
            .subscribe((Response) => (this.escenarios = Response))
        );
      window.alert('Se ha eliminado con éxito');
    } else {
    }
  }
}
