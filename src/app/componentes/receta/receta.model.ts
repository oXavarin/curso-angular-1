import { Ingrediente } from "../shared/ingredientes.model";

export class Receta {
    public nombre: string;
    public descripcion: string;
    public imagen: string;
    public ingredientes: Ingrediente[];

    constructor(nombre: string, descripcion: string, imagen: string, ingredientes: Ingrediente[] = []) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.ingredientes = ingredientes;
    }
    
    public agregarIngrediente(ingrediente: Ingrediente) {
        this.ingredientes.push(ingrediente);
    }

}