import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ListaModule } from './lista/lista.module';
import { CapitalizePipe } from './capitalize.pipe';
import { GenericFormModule } from './generic-form/generic-form.module';
import { SegundaTelaComponent } from './segunda-tela/segunda-tela.component';
import { EnderecoComponent } from './endereco/endereco.component';



@NgModule({
  declarations: [
    AppComponent,
    SegundaTelaComponent,
    EnderecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),

    ListaModule,
    GenericFormModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
