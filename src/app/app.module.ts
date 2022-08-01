import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EspaciosCduComponent } from './components/reservar-espacios/reservar_espacios_cdu/espacios-cdu/espacios-cdu.component';
import { EspaciosDiamanteComponent } from './components/reservar-espacios/reservar_espacios_diamante/espacios-diamante/espacios-diamante.component';
import { ReservarEspaciosComponent } from './components/reservar-espacios/reservar-espacios.component';
import { CanchasComponent } from './components/reservar-espacios/reservar_espacios_cdu/espacios-cdu/canchas_cdu/canchas/canchas.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { GestionEscenariosComponent } from './components/gestion-escenarios/gestion-escenarios.component';
import { FormEditarGestionEscenarioComponent } from './components/form-editar-gestion-escenario/form-editar-gestion-escenario.component';
import { FormCrearGestionEscenarioComponent} from './components/gestion-escenarios/form-crear-gestion-escenario/form-crear-gestion-escenario.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormAgregarHorarioComponent } from './components/calendario/form-agregar-horario/form-agregar-horario.component';

//import { AppRoutingModule } from './app-routing.module';


const appRoutes:Routes=[

  {path:'home', component:HomeComponent},
  {path:'espacios_cdu', component:EspaciosCduComponent},
  {path:'espacios_diamante', component:EspaciosDiamanteComponent},
  {path:'reservar_espacios', component:ReservarEspaciosComponent},
  {path:'canchas_cdu', component:CanchasComponent},
  //{path:'calendario', component:CalendarioComponent},
  {path:'gestion_escenarios', component:GestionEscenariosComponent},
  {path:'form_gestion_escenarios/form/:id', component:FormEditarGestionEscenarioComponent},
  {path:'form_crear_escenarios', component:FormCrearGestionEscenarioComponent},
  {path:'form_agregar_horario', component:FormAgregarHorarioComponent},
  {path:'canchaFutbolCdu', component:CalendarioComponent},
  {path:'canchaSintetica1', component:CalendarioComponent},
  {path:'canchaSintetica2', component:CalendarioComponent},
  {path:'canchaSintetica3', component:CalendarioComponent},
  {path:'canchaSintetica4', component:CalendarioComponent},
  {path:'canchaSintetica5', component:CalendarioComponent},
  {path:'canchaSintetica6', component:CalendarioComponent},
  {path:'canchaSintetica7', component:CalendarioComponent},
  {path:'coliseo', component:CalendarioComponent},
  {path:'dojos', component:CalendarioComponent},
  {path:'patinodromo', component:CalendarioComponent},
  {path:'piscinaOlimpica', component:CalendarioComponent},
  {path:'pistaAtletica', component:CalendarioComponent},
  {path:'salones', component:CalendarioComponent},
  {path:'canchaFutbolDiamante', component:CalendarioComponent},
  {path:'canchaSoftbol', component:CalendarioComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    EspaciosCduComponent,
    EspaciosDiamanteComponent,
    ReservarEspaciosComponent,
    CanchasComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CalendarioComponent,
    GestionEscenariosComponent,
    FormEditarGestionEscenarioComponent,
    FormCrearGestionEscenarioComponent,
    FormAgregarHorarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
