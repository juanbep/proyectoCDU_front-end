import { HorarioPK } from "./horario-pk";

export class Horario {
    horarioEstado: string = "";
    programaId: number = 0;
    usuarioId: number = 0;
    pk: HorarioPK =  new HorarioPK();
}
