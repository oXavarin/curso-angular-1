import { Component, OnChanges } from '@angular/core';
import { Ingrediente } from './componentes/shared/ingredientes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seleccionado: string = "receta";

  onSeleccionado(seleccionado: string): void {
    this.seleccionado = seleccionado;
  }

  ingrediente_recibido(ingrediente: Ingrediente): void {
    
  }

}
