import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { ListaClientiComponent } from './lista-clienti/lista-clienti.component';

const routes: Routes = [
  {path:"elenco",component:ListaClientiComponent},
  {path:"nuovo",component:InserimentoComponent},
  {path:"",redirectTo:"/elenco",pathMatch:"full"}
  //{path:"**",component:PageNotFoundComponent}


];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
