import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ParametrosComponent } from './componente-con-parametros/componente-con-parametros.component';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteHijoComponent,
    HomeComponent,
    AboutComponent,
    ParametrosComponent,
    LayoutComponent,
    NavComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
