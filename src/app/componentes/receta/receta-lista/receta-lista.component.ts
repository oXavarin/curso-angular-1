import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta.model';
import { Ingrediente } from '../../shared/ingredientes.model';
import { CestaComponent } from '../../cesta/cesta.component';

@Component({
  selector: 'app-receta-lista',
  templateUrl: './receta-lista.component.html',
  styleUrls: ['./receta-lista.component.css']
})
export class RecetaListaComponent implements OnInit {

  recetas: Receta[] = [
    new Receta("Tarta de queso", "Una tarta de queso muy buena", "https://images.pexels.com/photos/3185509/pexels-photo-3185509.png"),
    new Receta("Tortilla", "A gran tortilla do xavarin", "https://images.pexels.com/photos/14941247/pexels-photo-14941247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
  ];


  constructor() {
  }

  ngOnInit(): void {
 
  }

}
