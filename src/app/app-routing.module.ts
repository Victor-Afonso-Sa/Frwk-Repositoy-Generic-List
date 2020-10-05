import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnderecoComponent } from './endereco/endereco.component';
import { SegundaTelaComponent } from './segunda-tela/segunda-tela.component';



const routes: Routes = [
  {path: 'endereco', component: EnderecoComponent},
  {path: 'segund', component: SegundaTelaComponent},
  {path: 'lista', loadChildren: () => import('./lista/lista.module').then(m => m.ListaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
