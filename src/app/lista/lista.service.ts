import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ListaService {
  registros;
  @Output() addOnViewList: EventEmitter<any> = new EventEmitter();
  @Output() deleteOnViewList: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  getRegistros(){
  return this.http.get('http://localhost:8010/api/usuarios');
  }

}
