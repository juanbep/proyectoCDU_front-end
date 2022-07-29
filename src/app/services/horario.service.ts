import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Horario } from '../interfaces/horario';
import { HorarioPK } from '../interfaces/horario-pk';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  private url : string = "http://localhost:2022/api/horarios"; 

  constructor(private http:HttpClient) { }

  //Obtener la información de los horarios
  getHorariosInfo():Observable<Horario[]>{
    return this.http.get<Horario[]>(this.url)
  }

  create(horario: Horario):Observable<Horario>{
    return this.http.post<Horario>(this.url, horario);
  }

  createPk(horarioPk: HorarioPK):Observable<HorarioPK>{
    return this.http.post<HorarioPK>(this.url, horarioPk);
  }

   //eliminar una reserva 
  delete(id:number):Observable<Horario>{
    return this.http.delete<Horario>(this.url+'/'+id);
  }
}
