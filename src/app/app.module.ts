import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './componentes/header/header.component';
import { CestaComponent } from './componentes/cesta/cesta.component';
import { RecetaComponent } from './componentes/receta/receta.component';
import { RecetaListaComponent } from './componentes/receta/receta-lista/receta-lista.component';
import { RecetaDetallesComponent } from './componentes/receta/receta-detalles/receta-detalles.component';
import { RecetaItemComponent } from './componentes/receta/receta-lista/receta-item/receta-item.component';
import { CestaEditComponent } from './componentes/cesta/cesta-edit/cesta-edit.component';
import { FormsModule } from '@angular/forms';
import { BetterHighlightDirective } from './styles/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CestaComponent,
    RecetaComponent,
    RecetaListaComponent,
    RecetaDetallesComponent,
    RecetaItemComponent,
    CestaEditComponent,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
