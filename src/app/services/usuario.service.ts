import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url : string = "http://localhost:2022/api/usuarios"; 

  constructor(private http:HttpClient) { }

  getUsuarioInfo():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url)
  }
}
