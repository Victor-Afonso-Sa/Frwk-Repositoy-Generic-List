import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';
import { ListaService } from './lista/lista.service';

import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(

    private modal: ModalService,
    private listaService: ListaService
  ) {
    this.getRegistro();
  }
  f(obj){
    console.log(obj);
  }
  registro4;
  header = {
    nome_pais: 'Pais',
    gentilico: 'Nome Gentilico',
    nome_pais_int: 'Nome Inter',
    sigla: 'Sigla',
  };
  header2 = {
    id: 'COD UF',
    estado: 'uf',
  };
  header3 = {
    nome_pais: 'Pais Nome',
    nome_pais_int: 'Nome International',
  };
  oEdit;
  oDelete;
  oNovo;
  test;
  registros = [
    {
      id: '1',
      sigla: 'AC',
      nome: 'Acre',
      habitantes: '1000',
    },
    {
      id: '2',
      sigla: 'AL',
      nome: 'Alagoas',
      habitantes: '1000',
    },
    {
      id: '3',
      sigla: 'AM',
      nome: 'Amazonas',
    },
    {
      id: '4',
      sigla: 'AP',
      nome: 'Amapá',
    },
    {
      id: '5',
      sigla: 'BA',
      nome: 'Bahia',
    },
    {
      id: '6',
      sigla: 'CE',
      nome: 'Ceará',
    },
    {
      id: '7',
      sigla: 'DF',
      nome: 'Distrito Federal',
    },
  ];
  registros3 = [
    {
      id: '1',
      nome: 'Afonso Cláudio',
      estado: '8',
    },
    {
      id: '2',
      nome: 'Água Doce do Norte',
      estado: '8',
    },
    {
      id: '5',
      nome: 'Alfredo Chaves',
      estado: '8',
    },
    {
      id: '3',
      nome: 'Águia Branca',
      estado: '8',
    },
    {
      id: '4',
      nome: 'Alegre',
      estado: '8',
    },
    {
      id: '6',
      nome: 'Alto Rio Novo',
      estado: '8',
    },
  ];
  getRegistro() {
    let register;
    this.listaService
      .getRegistros()
      .pipe(delay(2000), take(1))
      .subscribe((data: any[]) => {
        this.registro4 = data;
      });
  }
}
