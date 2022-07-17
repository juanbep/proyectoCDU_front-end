import { Categoria } from "./categoria";

export class Escenario {
    escenarioNombre: string = "";
    escenarioDescripcion: string = "";
    escenarioFoto: Blob =new Blob();
    escenarioEstado: string =""; 
    escenarioCategoria: Categoria= new Categoria();
    escenarioUrl: string ="";
}

