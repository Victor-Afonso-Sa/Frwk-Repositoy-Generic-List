import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAlertComponent } from './modal-alert/modal-alert.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';



@NgModule({
  declarations: [ModalAlertComponent, ConfirmModalComponent],
  imports: [
    CommonModule
  ],
  exports:[ModalAlertComponent]
})
export class ModalModule { }
