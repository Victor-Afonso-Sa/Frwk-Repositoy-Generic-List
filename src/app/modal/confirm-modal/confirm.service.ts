import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  statusEdit = new BehaviorSubject('');
  statusDelete = new BehaviorSubject('');
  confimacaoDelete = new BehaviorSubject({});
  confimacaoEdicao = new BehaviorSubject({});
  constructor() { }

  setConfirmacaoDelete(value){
    this.confimacaoDelete.next(value);
  }
  setConfimacaoEdicao(value){
    this.confimacaoEdicao.next(value);
  }
  setEditSucesso(){
    this.statusEdit.next('sucesso');
  }
  setEditErro(){
    this.statusEdit.next('erro');
  }
  setDeleteSucesso(){
    this.statusDelete.next('success');
  }
  setDeleteErro(){
    this.statusDelete.next('erro');
  }
}
