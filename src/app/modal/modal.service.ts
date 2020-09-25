import { Injectable } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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

  showConfirm(msg: string, registro, title?: string, icon?: string, confirm?: string, cancel?: string){
    const confirmbsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent,{id: 1});
    confirmbsModalRef.content.msg = msg ;
    confirmbsModalRef.content.registro = registro ;
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
  showEdit(label: any[] , registros){
    const formModalRef: BsModalRef = this.modalService.show(FormComponent, { id: 1, class: 'modal-lg' });
    formModalRef.content.label = label;
    formModalRef.content.registros = registros;
  }

}
