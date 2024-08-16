import { Component, OnInit, Output, ViewChild, EventEmitter, Input, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingrediente } from '../../shared/ingredientes.model';

@Component({
  selector: 'app-cesta-edit',
  templateUrl: './cesta-edit.component.html',
  styleUrls: ['./cesta-edit.component.css']
})
export class CestaEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() ingrediente_a_engadir = new EventEmitter<Ingrediente>();

  @ViewChild('formulario') form!: NgForm;

  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('cantidadInput') cantidadInput!: ElementRef<HTMLInputElement>;

  add(): void {

    /* Forma 1 */
    let ingrediente: Ingrediente = new Ingrediente(this.form.value.nombree, Number(this.form.value.cantidadd));
    this.ingrediente_a_engadir.emit(ingrediente);

    /* Forma 2 */
    /* let nombre = this.nameInput.nativeElement.value;
    let cantidad = Number(this.cantidadInput.nativeElement.value);

    this.ingrediente_a_engadir.emit(new Ingrediente(nombre, cantidad)); */
  }


  clear(): void {
    this.form.reset();
  }

}
