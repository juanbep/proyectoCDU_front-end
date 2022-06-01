import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EspaciosCduComponent } from './components/reservar_espacios_cdu/espacios-cdu/espacios-cdu.component';
import { EspaciosDiamanteComponent } from './components/reservar_espacios_diamante/espacios-diamante/espacios-diamante.component';

const appRoutes:Routes=[

  {path:'espacios_cdu', component:EspaciosCduComponent},
  {path:'espacios_diamante', component:EspaciosDiamanteComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    EspaciosCduComponent,
    EspaciosDiamanteComponent
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
