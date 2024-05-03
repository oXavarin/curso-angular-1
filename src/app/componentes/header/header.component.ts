import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  mostrarDropdown: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

 @Output() seleccionadoEvent = new EventEmitter<string>();

  seleccionado(seleccionado: string) {
    this.seleccionadoEvent.emit(seleccionado);
  }

}
