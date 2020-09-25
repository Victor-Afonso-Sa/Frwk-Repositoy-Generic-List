import { Component } from '@angular/core';
import { ConfirmService } from './modal/confirm-modal/confirm.service';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private confirmService: ConfirmService,private modal: ModalService){
    this.confirmService.confimacaoEdicao
    .subscribe(data => data ? this.title = data : console.log("deuruin"));
    this.confirmService.statusEdit
    .subscribe( data => data ? this.modal.showAlertSuccess("Sucesso") : null);
    this.confirmService.statusDelete
    .subscribe(data => data ? this.modal.showAlertSuccess("Sucesso") : null);
  }
  title ;
  test;
  registro=	[{
    "id": "1",
    "nome": "Afonso Cláudio",
    "estado": "8"
  },
       {
    "id": "2",
    "nome": "Água Doce do Norte",
    "estado": "8"
  },
       {
    "id": "3",
    "nome": "Águia Branca",
    "estado": "8"
  },
       {
    "id": "4",
    "nome": "Alegre",
    "estado": "8"
  },
       {
    "id": "5",
    "nome": "Alfredo Chaves",
    "estado": "8"
  },
       {
    "id": "6",
    "nome": "Alto Rio Novo",
    "estado": "8"
  },
       {
    "id": "7",
    "nome": "Anchieta",
    "estado": "8"
  },
       {
    "id": "8",
    "nome": "Apiacá",
    "estado": "8"
  },
       {
    "id": "9",
    "nome": "Aracruz",
    "estado": "8"
  },
       {
    "id": "10",
    "nome": "Atilio Vivacqua",
    "estado": "8"
  },
       {
    "id": "11",
    "nome": "Baixo Guandu",
    "estado": "8"
  },
       {
    "id": "12",
    "nome": "Barra de São Francisco",
    "estado": "8"
  },
       {
    "id": "13",
    "nome": "Boa Esperança",
    "estado": "8"
  },
       {
    "id": "14",
    "nome": "Bom Jesus do Norte",
    "estado": "8"
  },
       {
    "id": "15",
    "nome": "Brejetuba",
    "estado": "8"
  },
       {
    "id": "16",
    "nome": "Cachoeiro de Itapemirim",
    "estado": "8"
  }];
  registros2=[
     {
    "id": "5",
    "sigla": "BA",
    "nome": "Bahia"
  },
     {
    "id": "6",
    "sigla": "CE",
    "nome": "Ceará"
  },
     {
    "id": "7",
    "sigla": "DF",
    "nome": "Distrito Federal"
  },
   {
"id": "8",
"sigla": "ES",
"nome": "Espírito Santo"
},
   {
"id": "9",
"sigla": "GO",
"nome": "Goiás"
},
   {
"id": "10",
"sigla": "MA",
"nome": "Maranhão"
}];

}
