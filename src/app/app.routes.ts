import { Routes } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: EventosComponent,
    loadChildren: './eventos/eventos.module#EventosModule'
  },
  {
    path: '',
    component: PagesComponent,
    loadChildren: './pages/pages.module#PagesModule'
  },
  { path: '**', component: NopagefoundComponent }
];


