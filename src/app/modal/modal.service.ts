import { EventEmitter, Injectable, Output } from '@angular/core';

import {
  BsModalRef,
  BsModalService,
  ModalDirective,
} from 'ngx-bootstrap/modal';
import { FormComponent } from '../generic-form/form/form.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ModalAlertComponent } from './modal-alert/modal-alert.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
}
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  private showAlert(type, msg, timeout: number = 4000) {
    this.bsModalRef = this.modalService.show(ModalAlertComponent, {
      id: 2,
      class: 'end',
    });
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = msg;
    if (timeout) {
      setTimeout(() => this.bsModalRef.hide(), timeout);
    }
  }
  showAlertDanger(msg, timeout?: number) {
    this.showAlert(AlertTypes.DANGER, msg, timeout);
  }
  showAlertSuccess(msg, timeout?: number) {
    this.showAlert(AlertTypes.SUCCESS, msg, timeout);
  }

  showConfirm(
    funcao: EventEmitter<any>,
    registro: object,
    config
  ) {
    console.log(config)
    const confirmbsModalRef: BsModalRef = this.modalService.show(
      ConfirmModalComponent,
      { id: 1 }
    );
    confirmbsModalRef.content.registro = registro;
    confirmbsModalRef.content.funcao = funcao;
    if (config){
      if (config.menssagem){
      confirmbsModalRef.content.msg = config.menssagem;
    }
      if (config.icon) {
      confirmbsModalRef.content.icon = config.icon;
    }
      if (config.textConfirm) {
      confirmbsModalRef.content.confirm = config.textConfirm;
    }
      if (config.textCancel) {
      confirmbsModalRef.content.cancel = config.textCancel;
    }
      if (config.title) {
      confirmbsModalRef.content.title = config.title;
    }
      if (config.classe) {
      confirmbsModalRef.content.classeConfirmModal = config.classe;
    }
}
    return  confirmbsModalRef.content as ConfirmModalComponent;
  }
  showForm(
    funcao: EventEmitter<any>,
    label,
    edit,
    isKey?: boolean,
    tipos?: object,
    obrigatario?: any[],
    readOnly?: any[],
    classeForm?: string,
    registros?: object
  ) {
    let control;
    if (isKey) {
      control = Object.keys(label);
    } else {
      control = Object.values(label);
    }
    const formModalRef: BsModalRef = this.modalService.show(FormComponent, {
      id: 1,
      class: 'modal-lg',
    });
    formModalRef.content.label = label;
    if (registros) {
      formModalRef.content.registros = registros;
      formModalRef.content.registrosCopy = Object.assign({}, registros);
    }
    if (tipos) {
      formModalRef.content.tipos = tipos;
    }
    if (obrigatario) {
      formModalRef.content.obrigatorio = obrigatario;
    }
    if (classeForm) {
      formModalRef.content.classeForm = classeForm;
    }
    if (readOnly) {
      formModalRef.content.readOnly = readOnly;
    }
    formModalRef.content.controlador = control;
    formModalRef.content.edit = edit;
    formModalRef.content.funcao = funcao;
  }
}
