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



const appRoutes:Routes=[

  {path:'home', component:HomeComponent},
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
    CanchasComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
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
