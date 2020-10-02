import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { ListaRoutingModule } from './lista-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CapitalizePipe } from '../capitalize.pipe';




@NgModule({
  declarations: [ListaComponent, CapitalizePipe],
  imports: [
    CommonModule,
    ListaRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[ListaComponent]

})
export class ListaModule { }
