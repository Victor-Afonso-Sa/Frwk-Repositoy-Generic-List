import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { ConfirmService } from './confirm.service';


@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {
  @Input() registro: object;
  @Input() title: string = 'Confirmar seleção';
  @Input() icon: string = 'warning';
  @Input() msg: string;
  @Input() cancel = 'Cancelar';
  @Input() confirm = 'Sim';
  ModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private confirmService: ConfirmService
    ) { }

  ngOnInit(): void {

  }
  onConfirm(){
    this.confirmService.setConfirmacaoDelete(this.registro);
    this.confirmService.confimacaoDelete.subscribe(
      success => {console.log(success);this.confirmService.setDeleteSucesso()},
      error =>  this.confirmService.setDeleteErro()
    );
    setTimeout(() => this.modalService.hide(), 2000);
  }

  onClose(){
    this.modalService.hide();
  }
}
