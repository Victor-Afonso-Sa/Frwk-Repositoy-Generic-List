import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { CapitalizePipe } from 'src/app/capitalize.pipe';
import { ConfirmService } from 'src/app/modal/confirm-modal/confirm.service';
import { ModalService } from 'src/app/modal/modal.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() label: any[] ;
  @Input() registros: any[];
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private confirmacaoService: ConfirmService
    ) { }
  ngOnInit(): void {
  }
  onCancel(){
    this.modalService.hide();
  }
  onEdit(formulario){
    this.confirmacaoService.setConfimacaoEdicao(formulario.value);
    this.confirmacaoService.confimacaoEdicao.subscribe(
      success =>{ console.log(success); this.confirmacaoService.setEditSucesso()},
      error =>  this.confirmacaoService.setEditErro()
    )
    setTimeout(() => this.modalService.hide(), 2000);
  }
}
