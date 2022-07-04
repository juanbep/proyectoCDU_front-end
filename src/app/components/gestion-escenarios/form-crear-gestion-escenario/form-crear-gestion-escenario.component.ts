import { Component, OnInit } from '@angular/core';
import { Escenario } from 'src/app/interfaces/escenario';  
import { Router} from '@angular/router';
import { EscenarioService } from 'src/app/services/escenario.service';

@Component({
  selector: 'app-form-crear-gestion-escenario',
  templateUrl: './form-crear-gestion-escenario.component.html',
  styleUrls: ['./form-crear-gestion-escenario.component.css']
})
export class FormCrearGestionEscenarioComponent implements OnInit {

  escenario:Escenario = new Escenario();
  titulo:string = "Crear Escenario";

  constructor(private escenarioService:EscenarioService, private router:Router) { }

  ngOnInit(): void {

  }

  create():void{
    console.log(this.escenario)
    this.escenarioService.create(this.escenario).subscribe(
      res=>this.router.navigate(['/gestion_escenarios'])
    );
  }
}