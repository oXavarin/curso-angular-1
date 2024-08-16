import { Component, Input, OnInit } from '@angular/core';
import { Receta } from '../receta.model';

@Component({
  selector: 'app-receta-detalles',
  templateUrl: './receta-detalles.component.html',
  styleUrls: ['./receta-detalles.component.css']
})
export class RecetaDetallesComponent implements OnInit {

  abierto: boolean = false;
  
  @Input() receta!: Receta;

  constructor() { }


  ngOnInit(): void {
  }

}
