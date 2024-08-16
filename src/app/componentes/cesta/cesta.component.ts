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

  ingrediente_seleccionadoo!: Ingrediente;

  constructor() { }

  ngOnInit(): void {
  }

  ingrediente_engadir(datos: Ingrediente): void {
    console.log(datos);
    
    this.ingredientes.push(datos);
  }

  ingrediente_seleccionado(ingrediente: Ingrediente): void {
    this.ingrediente_seleccionadoo = ingrediente;
  }

}
