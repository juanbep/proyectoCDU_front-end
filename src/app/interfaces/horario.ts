import { Escenario } from "./escenario";
import { HorarioPK } from "./horario-pk";
import { Programa } from "./programa";
import { Usuario } from "./usuario";

export class Horario {
    horarioEstado: string = "";
    horarioPrograma: Programa = new Programa();
    horarioUsuario: Usuario = new Usuario();
    horarioEscenario: Escenario = new Escenario();
    pk: HorarioPK =  new HorarioPK();
}
