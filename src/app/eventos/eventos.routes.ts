import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { ListaComponent } from './lista/lista.component';



const eventosRoutes: Routes = [
    { path: 'eventos', component: EventosComponent },
    { path: 'lista', component: ListaComponent },
    { path: '', redirectTo: '/eventos', pathMatch: 'full' }
];


export const EVENTOS_ROUTES = RouterModule.forChild( eventosRoutes );