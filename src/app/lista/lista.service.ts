import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ListaService {
  registros;
  constructor(private http: HttpClient) { }

  getRegistros(){
  return this.http.get('assets/Data/objeto.json');
  }
}
