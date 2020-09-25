import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.css']
})
export class ModalAlertComponent implements OnInit {

  @Input() message: string;
  @Input() type: string = 'success';


  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  onCloseModal(){
    this.bsModalRef.hide();
  }
}
