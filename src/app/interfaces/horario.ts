import { Escenario } from "./escenario";
import { HorarioPK } from "./horario-pk";
import { Programa } from "./programa";
import { Usuario } from "./usuario";

export class Horario {
    horarioEstado: string = "";
    horarioEscenario: Escenario = new Escenario();
    pk: HorarioPK =  new HorarioPK();
    horarioUsuario: Usuario = new Usuario();
    horarioPrograma: Programa = new Programa();
}
