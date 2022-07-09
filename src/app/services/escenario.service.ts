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

  //Método para obtener un solo escenario
  getEscenario(id:string):Observable<Escenario>{
    return this.http.get<Escenario>(this.url+'/'+id)
  }

  //Método para crear un nuevo escenario
  create(escenario: Escenario):Observable<Escenario>{
    return this.http.post<Escenario>(this.url, escenario);
  }

  //Método para actualizar un escenario
  update(id:string, escenario: Escenario ):Observable<Escenario>{
    return this.http.put<Escenario>(this.url+'/'+id, escenario);
  }

  //eliminar un escenario
  delete(id:string):Observable<Escenario>{
    return this.http.delete<Escenario>(this.url+'/'+id);
  }
}
