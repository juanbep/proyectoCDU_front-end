import { HorarioPK } from "./horario-pk";

export class Horario {
    horarioEstado: string = "";
    programaId: string = "";
    usuarioId: string = "";
    pk: HorarioPK =  new HorarioPK();
}
