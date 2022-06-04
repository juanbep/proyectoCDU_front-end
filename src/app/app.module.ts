import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EspaciosCduComponent } from './components/reservar-espacios/reservar_espacios_cdu/espacios-cdu/espacios-cdu.component';
import { EspaciosDiamanteComponent } from './components/reservar-espacios/reservar_espacios_diamante/espacios-diamante/espacios-diamante.component';
import { ReservarEspaciosComponent } from './components/reservar-espacios/reservar-espacios.component';
import { CanchasComponent } from './components/reservar-espacios/reservar_espacios_cdu/espacios-cdu/canchas_cdu/canchas/canchas.component';



const appRoutes:Routes=[

  {path:'espacios_cdu', component:EspaciosCduComponent},
  {path:'espacios_diamante', component:EspaciosDiamanteComponent},
  {path:'reservar_espacios', component:ReservarEspaciosComponent},
  {path:'canchas_cdu', component:CanchasComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EspaciosCduComponent,
    EspaciosDiamanteComponent,
    ReservarEspaciosComponent,
    CanchasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
