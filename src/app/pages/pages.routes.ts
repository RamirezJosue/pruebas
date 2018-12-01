import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';


const pagesRoutes: Routes = [
    { path: 'evento', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '', redirectTo: '/eventos', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );

