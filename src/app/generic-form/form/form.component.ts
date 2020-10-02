import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ListaService } from 'src/app/lista/lista.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  edit = true;
  @Output() funcao: EventEmitter<any> = new EventEmitter();
  @Input() controlador = [];
  @Input() label;
  @Input() registros = {};
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private listService: ListaService
  ) {}
  ngOnInit(): void {
  }
  onCancel() {
    this.modalService.hide();
  }
  onEdit(formulario) {
    this.funcao.emit([formulario.value]);

    setTimeout(() => this.modalService.hide(), 500);
  }
  onCreate(formulario) {
  for(let c of this.controlador){
  if(formulario.value[c] !== undefined){
    this.funcao.emit([formulario.value]);
    this.listService.addOnViewList.emit([formulario.value]);
  };}
    setTimeout(() => this.modalService.hide(), 500);
  }
}
