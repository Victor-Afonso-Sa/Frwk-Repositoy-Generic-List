import { Injectable, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormComponent } from './form/form.component';

@Injectable({
  providedIn: 'root'
})
export abstract class FormService implements OnInit {
  formulario: FormGroup;
  // constructor(private componente: FormComponent) { }
  ngOnInit(): void {

  }
  varificavalidacao(group: FormGroup | FormArray) {
    Object.keys(group.controls).forEach((campo) => {
      console.log(campo);
      const controle = group.get(campo);
      controle.markAsTouched();
      controle.markAsDirty();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.varificavalidacao(controle);
      }
    });
  }
  abstract submit();

  onSubmit(){
    if(this.formulario.valid){
      this.submit();
    }
  }

  resetForm() {
    this.formulario.reset();
  }

}
