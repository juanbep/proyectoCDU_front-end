import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programa } from '../interfaces/programa';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {

  private url : string = "http://localhost:2022/api/programas"; 

  constructor(private http:HttpClient) { }

  getProgramaInfo():Observable<Programa[]>{
    return this.http.get<Programa[]>(this.url)
  }
}
