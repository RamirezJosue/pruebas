import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosComponent } from './eventos/eventos.component';
import { EVENTOS_ROUTES } from './eventos.routes';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [EventosComponent, ListaComponent],
  imports: [
    CommonModule,
    EVENTOS_ROUTES
  ]
})
export class EventosModule { }
