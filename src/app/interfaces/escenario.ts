import { Categoria } from "./categoria";

export class Escenario {
    escenarioNombre: string = "";
    escenarioDescripcion: string = "";
    escenarioFoto: string = "";
    escenarioEstado: string =""; 
    escenarioCategoria: Categoria= new Categoria();
    escenarioUrl: string ="";
}