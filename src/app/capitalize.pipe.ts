import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let values = value.split(' ');
    let resultado = '';
    for(let valor of values){
      resultado += this.capitalize(valor)+ ' ' ;
    }
    return resultado;
  }

  capitalize(value:string){
    return value.substr(0,1).toUpperCase()+value.substr(1).toLowerCase();
  }


}
