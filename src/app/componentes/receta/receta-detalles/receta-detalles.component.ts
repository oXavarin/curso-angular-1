import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta-detalles',
  templateUrl: './receta-detalles.component.html',
  styleUrls: ['./receta-detalles.component.css']
})
export class RecetaDetallesComponent implements OnInit {

  abierto: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
