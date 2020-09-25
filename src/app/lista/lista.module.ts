import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { ListaRoutingModule } from './lista-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListaComponent],
  imports: [
    CommonModule,
    ListaRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[ListaComponent],
  providers:[]

})
export class ListaModule { }
