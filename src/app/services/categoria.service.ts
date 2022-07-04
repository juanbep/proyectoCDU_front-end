import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url : string = "http://localhost:2022/api/categorias"; 

  constructor(private http:HttpClient) { }

  //Obtener la información de las categorias
  getCategoriasInfo():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url)
  }

  //Método para crear una nueva categoria
  create(escenario: Categoria):Observable<Categoria>{
    return this.http.post<Categoria>(this.url, Categoria);
  }

  //Método para actualizar una categoria 
  update(escenario:Categoria):Observable<Categoria>{
    return this.http.put<Categoria>(this.url, escenario);
  }

  //eliminar una categoria 
  delete(id:number):Observable<Categoria>{
    return this.http.delete<Categoria>(this.url+'/'+id);
  }
}
