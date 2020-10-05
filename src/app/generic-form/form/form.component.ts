import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  @Input() registrosCopy;
  @Input() tipos = {};
  @Input() obrigatorio: any[];
  @Input() readOnly: any[];
  @Input() classeForm = '' ;
  modalRef: BsModalRef;
  refresh = true;
  constructor(
    private modalService: BsModalService,
    private listService: ListaService
  ) {}
  ngOnInit(): void {
  }
  onCancel(formulario: FormGroup) {
    formulario.reset(this.registrosCopy)
    this.onHide();
  }
  onEdit(formulario) {
    this.funcao.emit([formulario.value]);
    setTimeout(() => this.modalService.hide(), 500);
  }
  onCreate(formulario) {
    this.funcao.emit([formulario.value]);
    this.listService.addOnViewList.emit(formulario.value);
    setTimeout(() => this.modalService.hide(), 500);
  }
  isRequired(campo){
    let is;
    for (const o of this.obrigatorio){
      if (o == campo){
        return  true;
      }
    }
    return false;
  }
  isReadOnly(campo){
    let is;
    for (const o of this.readOnly){
      if (o == campo){
        return  true;
      }
    }
    return false;
  }
  onHide(){
  this.modalService.hide();
  }
}
