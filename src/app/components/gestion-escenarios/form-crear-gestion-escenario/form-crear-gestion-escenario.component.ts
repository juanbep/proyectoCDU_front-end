import { Component, OnInit } from '@angular/core'; 
import { Router} from '@angular/router';
import { EscenarioService } from 'src/app/services/escenario.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-crear-gestion-escenario',
  templateUrl: './form-crear-gestion-escenario.component.html',
  styleUrls: ['./form-crear-gestion-escenario.component.css']
})

export class FormCrearGestionEscenarioComponent implements OnInit {

  profileForm = new FormGroup({
    nombreEscenario: new FormControl(''),
    descripcionEscenario: new FormControl(''),
    estadoEscenario: new FormControl(''),
    imagenEscenario: new FormControl(''),
  });

  constructor(private escenarioService:EscenarioService, private router:Router) { }

  ngOnInit(): void {

  }
  onSubmit() {
    console.warn(this.profileForm.value); //en this.profileForm.value tenemos el valor del form para poder manipularlo a nuestro gusto. Si queremos acceder a, por ejemplo, un control especifico, podemos hacerlo con this.profileForm.controls['nombreControl']
  }
}
