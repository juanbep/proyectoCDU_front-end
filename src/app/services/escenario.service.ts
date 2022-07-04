import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Escenario } from '../interfaces/escenario';

@Injectable({
  providedIn: 'root'
})
export class EscenarioService {
  private url : string = "http://localhost:2022/api/escenarios"; 
  
  constructor(private http:HttpClient) { }

  //Obtener la información de los escenarios
  getEscenariosInfo():Observable<Escenario[]>{
    return this.http.get<Escenario[]>(this.url)
  }

  //Método para crear un nuevo escenario
  create(escenario: Escenario):Observable<Escenario>{
    return this.http.post<Escenario>(this.url, Escenario);
  }

  //Método para actualizar un escenario
  update(escenario:Escenario):Observable<Escenario>{
    return this.http.put<Escenario>(this.url, escenario);
  }

  //eliminar un escenario
  delete(id:number):Observable<Escenario>{
    return this.http.delete<Escenario>(this.url+'/'+id);
  }
}
