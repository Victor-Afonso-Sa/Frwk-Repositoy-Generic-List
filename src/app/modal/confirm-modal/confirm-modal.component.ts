import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ListaService } from 'src/app/lista/lista.service';


@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {
  @Output() funcao: EventEmitter<any> = new EventEmitter();
  @Input() registro: object;
  @Input() title: string = 'Confirmar seleção';
  @Input() icon: string = 'warning';
  @Input() msg: string;
  @Input() cancel = 'Cancelar';
  @Input() confirm = 'Sim';
  ModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private listaService: ListaService
    ) { }

  ngOnInit(): void {

  }
  onConfirm(){
    this.funcao.emit([this.registro]);
    this.listaService.deleteOnViewList.emit([this.registro]);
    setTimeout(() => this.modalService.hide(), 1000);
  }
  onClose(){
    this.modalService.hide();
  }
}
