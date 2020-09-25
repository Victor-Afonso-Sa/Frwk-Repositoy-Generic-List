import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { Subject } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';
import { FormService } from 'src/app/generic-form/form.service';
import { ModalService } from 'src/app/modal/modal.service';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-table',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  exist = false;
  @Input() color = 'black';
  @Input() largura = '100%';
  @Input() size = 'medium' ;
  @Input() classe = '' ;
  @Input() registros = [{
  }];
  regTitles;
  msg = 'Erro';
  constructor(
    private modalService: ModalService,
    private router: Router,
    private service: ListaService,
    private formService: FormService) { }

  ngOnInit(): void {
    if (this.registros){
      this.regTitles = Object.keys(this.registros[0]);
      this.exist = true;
    }
 }
  ngOnChanges():void{
   console.log('change')
  }
  refresh(){
    this.service.getRegistros().pipe(
      delay(1000),
      map(
        (data: any[]) => {
         this.registros = data;
         this.exist = true;
        }
        ),
        take(1)
    )
    .subscribe( );
  }
  onEdit(controle: string){
    this.modalService.showEdit(this.regTitles, this.registros[controle]);
  }
  onDelete(controle){
    this.modalService.showConfirm('Deseja mesmo excluir?',this.registros[controle]);
  }

}
