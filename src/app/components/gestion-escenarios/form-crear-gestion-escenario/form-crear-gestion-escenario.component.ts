import { Component, OnInit, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core'; 
import { Router} from '@angular/router';
import { EscenarioService } from 'src/app/services/escenario.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Escenario } from 'src/app/interfaces/escenario';
@Component({
  selector: 'app-form-crear-gestion-escenario',
  templateUrl: './form-crear-gestion-escenario.component.html',
  styleUrls: ['./form-crear-gestion-escenario.component.css']
})

export class FormCrearGestionEscenarioComponent implements OnInit {

  profileForm = new FormGroup({
    escenarioNombre: new FormControl(''),
    escenarioDescripcion: new FormControl(''),
    escenarioFoto: new FormControl(''),
    escenarioEstado: new FormControl(''),
  });

  constructor(private escenarioService:EscenarioService, private router:Router) { }

  ngOnInit(): void {

  }
  onSubmit() {
    console.warn(this.profileForm.value); 
  }

  createEscenario():void{
    this.escenarioService.create(this.profileForm.value).subscribe(
      red=>this.router.navigate(['/escenarios'])
    );
  }
}
