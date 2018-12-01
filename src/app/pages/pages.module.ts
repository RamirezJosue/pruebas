import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PAGES_ROUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.module';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [HomeComponent, ContactoComponent],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    SharedModule
  ]
})
export class PagesModule { }
