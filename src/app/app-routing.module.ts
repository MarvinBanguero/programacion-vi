import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { CardsComponent } from './cards/cards.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {path:'formulario', component: FormularioComponent},
  {path:'card', component: CardsComponent},
  {path:'table', component: TableComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
