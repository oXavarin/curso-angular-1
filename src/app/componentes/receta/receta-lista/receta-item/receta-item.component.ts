import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Receta } from '../../receta.model';

@Component({
  selector: 'app-receta-item',
  templateUrl: './receta-item.component.html',
  styleUrls: ['./receta-item.component.css']
})
export class RecetaItemComponent implements OnInit {

  @Input() receta!: Receta;

  constructor() {
  }

  ngOnInit(): void {

  }


  @Output() receta_eveto = new EventEmitter<void>();

  receta_seleccionada(receta: Receta, evento: any): void {
    this.receta_eveto.emit();
  }

}
