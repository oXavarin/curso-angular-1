import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Ingrediente } from '../shared/ingredientes.model';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {

  ingredientes: Ingrediente[] = [
    new Ingrediente("Tomate", 2),
    new Ingrediente("Pimiento", 1)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  @Output() ingrediente_a_enviar = new EventEmitter<Ingrediente>();

  anadirIngrediente(ingrediente: Ingrediente) {
    this.ingrediente_a_enviar.emit(ingrediente);
  }

}
