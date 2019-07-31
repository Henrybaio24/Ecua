import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TorneosComponent } from './torneos/torneos.component';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { InicioComponent } from './inicio/inicio.component';



const routes: Routes = [  
  { path: 'inicio', component: InicioComponent},
  { path: 'torneos', component: TorneosComponent },
  { path: 'equipos', component: ListaEquiposComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
