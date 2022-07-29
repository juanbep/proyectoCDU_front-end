export class Usuario {
    id!: number;
    documento: string = "";
    tipoDocumento: string = "";
    primerNombre: string = "";
    segundoNombre: string = "";
    primerApellido: string = "";
    segundoApellido:  string = "";
    genero: string = "";
    fechaNacimiento: Date = new Date();
    username: string = "";
    password: string = "";
    tipoUsuario: string = "";
    email: string = "";
    telefono: string = "";
    foto: Blob = new Blob();
    fotPrefix: string = "";
    estado!: number;
    fechaCreacion: Date = new Date();
}
