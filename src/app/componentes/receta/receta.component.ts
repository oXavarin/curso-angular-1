import { Component, Input, OnInit } from '@angular/core';
import { Ingrediente } from '../shared/ingredientes.model';
import { Receta } from './receta.model';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  receta!: Receta;

  receta_recibida(evento: any): void {
    this.receta = evento;
  }
}
