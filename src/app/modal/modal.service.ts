import { EventEmitter, Injectable, Output } from '@angular/core';

import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { FormComponent } from '../generic-form/form/form.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ModalAlertComponent } from './modal-alert/modal-alert.component';

export enum AlertTypes{
  DANGER = 'danger',
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning'
}
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }
  private showAlert(type, msg, timeout: number= 4000){
    this.bsModalRef = this.modalService.show(ModalAlertComponent,{id: 2, class: 'end' });
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = msg;
    if (timeout){
      setTimeout(() => this.bsModalRef.hide(), timeout);
    }
  }
  showAlertDanger(msg, timeout?: number){
    this.showAlert(AlertTypes.DANGER, msg, timeout);
  }
  showAlertSuccess(msg, timeout?: number){
    this.showAlert(AlertTypes.SUCCESS, msg, timeout);
  }

  showConfirm(funcao: EventEmitter<any>,msg: string, registro, title?: string, icon?: string, confirm?: string, cancel?: string){
    const confirmbsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent,{id: 1});
    confirmbsModalRef.content.msg = msg ;
    confirmbsModalRef.content.registro = registro ;
    confirmbsModalRef.content.funcao = funcao ;
    if(icon){
      confirmbsModalRef.content.icon = icon;
    }
    if(confirm){
      confirmbsModalRef.content.confirm = confirm;
    }
    if(cancel){
      confirmbsModalRef.content.cancel = cancel;
    }
    if(title){
      confirmbsModalRef.content.title = title;
    }

    return (<ConfirmModalComponent>confirmbsModalRef.content);
  }
  showForm(funcao: EventEmitter<any> , label, edit, isKey?: boolean, registros?: object){
    let control;
    if(isKey){
    control = Object.keys(label);
    }else{
    control = Object.values(label);
    }
    const formModalRef: BsModalRef  = this.modalService.show(FormComponent, { id: 1, class: 'modal-lg' });
    formModalRef.content.label = label;
    if(registros){
    formModalRef.content.registros = registros;
    }
    formModalRef.content.controlador = control ;
    formModalRef.content.edit = edit ;
    formModalRef.content.funcao = funcao ;
  }
}
