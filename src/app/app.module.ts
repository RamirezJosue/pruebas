import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { EventosComponent } from './eventos/eventos.component';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages/pages.component';
import { NavbarComponent } from './pages/sharedp/navbar/navbar.component';
import { FootComponent } from './pages/sharedp/foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    PagesComponent,
    EventosComponent,
    NavbarComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
