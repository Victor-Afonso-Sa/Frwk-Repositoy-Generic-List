import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SegundaTelaComponent } from './segunda-tela/segunda-tela.component';



const routes: Routes = [
  {path: 'segund', component: SegundaTelaComponent},
  {path: 'lista', loadChildren: () => import('./lista/lista.module').then(m => m.ListaModule)},
  {path: '', pathMatch: 'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
