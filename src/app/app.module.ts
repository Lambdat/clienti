import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClientiComponent } from './lista-clienti/lista-clienti.component';
import {HttpClientModule} from '@angular/common/http';
import { InserimentoComponent } from './inserimento/inserimento.component' //LIBRERIA DA IMPORTARE
import { ReactiveFormsModule } from '@angular/forms';
//Questo modulo serve per effettuare le chiamate


@NgModule({
  declarations: [
    AppComponent,
    ListaClientiComponent,
    InserimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //AGGIUNGERE NELL IMPORT[] HTTP CLIENT MODULE
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
