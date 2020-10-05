import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {EMPTY} from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  take
} from 'rxjs/operators';
import { ModalService } from 'src/app/modal/modal.service';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-table',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  isKey = true;
  @Input() searchBox = true;
  iconOrdenacao = 'expand_more';
  reverse = false;
  exist = false;
  queryField = new FormControl();
  sizeObj: number;
  tableTitles = {};
  @Output() inserir: EventEmitter<any> = new EventEmitter();
  @Output() editar: EventEmitter<any> = new EventEmitter();
  @Output() excluir: EventEmitter<any> = new EventEmitter();
  @Input() config: object = null;
  @Input() classeTable = 'default';
  @Input() registros: Array<any> = null;
  @Input() color: string;
  @Input() classeForm: string;
  @Input() classeConfirmModal: object = null;
  @Input() datePatern;
  cabecalho: object = null;
  tipos: object = null;
  obrigatorio: any[];
  readOnly: any[];
  regTitles = [];
  msg = 'Erro';
  aux = 0;
  sugest: any[] = [];
  constructor(
    private modalService: ModalService,
    private service: ListaService
  ) {}

  ngOnInit(): void {
    if (this.config && this.config['cabecalho']) {
      this.cabecalho = this.config['cabecalho'];
    }
    if (this.config && this.config['tipos']) {
      this.tipos = this.config['tipos'];
    }
    if (this.config && this.config['obrigatorio']) {
      this.obrigatorio = this.config['obrigatorio'];
    }
    if (this.config && this.config['readOnly']) {
      this.readOnly = this.config['readOnly'];
    }
    this.refresh();
    this.onSearch();
  }

  refresh() {
    if (this.registros) {
      const size = this.registros.length;
      for (let r = 0; r < size; r++) {
        this.sizeObj = Object.keys(this.registros[r]).length;
        if (this.sizeObj > this.aux) {
          this.aux = this.sizeObj;
          this.regTitles = Object.keys(this.registros[r]);
        }
      }
      this.exist = true;
    }
    if (this.cabecalho == null) {
      this.tableTitles = this.regTitles;
      this.isKey = false;
    } else {
      const sizeMap = Object.keys(this.cabecalho).length;
      if (sizeMap == this.sizeObj) {
        this.tableTitles = this.cabecalho;
      } else {
        for (const objTitles of this.regTitles) {
          if (this.cabecalho[objTitles]) {
            this.tableTitles[objTitles] = this.cabecalho[objTitles];
          } else {
            this.tableTitles[objTitles] = objTitles;
          }
        }
      }
    }
  }
  onDelete(controle) {
    this.modalService.showConfirm(
      this.excluir,
      this.registros[controle],
      this.classeConfirmModal
    );
    this.service.deleteOnViewList
      .pipe(take(1))
      .subscribe((data: object) =>
        Object.keys(data).length > 0 ? this.deletar(data[0]) : EMPTY
      );
  }
  onEdit(controle: string) {
    this.modalService.showForm(
      this.editar,
      this.tableTitles,
      true,
      this.isKey,
      this.tipos,
      this.obrigatorio,
      this.readOnly,
      this.classeForm,
      this.registros[controle]
    );
  }
  onNew() {
    this.modalService.showForm(
      this.inserir,
      this.tableTitles,
      false,
      this.isKey,
      this.tipos,
      this.obrigatorio,
      this.readOnly,
      this.classeForm
    );
    this.service.addOnViewList
      .pipe(take(1))
      .subscribe((data: object) =>
        Object.values(data).length > 0 ? this.registros.push(data) : EMPTY
      );
  }
  onSearch() {
    this.queryField.valueChanges
      .pipe(
        map((value) => value.trim()),
        debounceTime(200),
        distinctUntilChanged()
      )
      .subscribe((input) => {
        for (const control of this.regTitles) {
          const result = this.registros.filter(
            (value) => value[control] == input
          );
          if (result !== undefined && result.length > 0) {
            result.forEach((value) => this.sugest.push(value));
            this.queryField.markAsPristine();
            break;
          }
        }
        if (this.queryField.dirty) {
          this.sugest = [];
        }
      });
  }
  onOrder() {
    if (this.iconOrdenacao == 'expand_more') {
      this.iconOrdenacao = 'expand_less';
      this.registros = this.registros.reverse();
    } else {
      this.iconOrdenacao = 'expand_more';
      this.registros = this.registros.reverse();
    }
  }
  adicionar(obj) {
    this.registros.push(obj);
    this.refresh();
  }
  deletar(obj) {
    const index = this.registros.indexOf(obj);
    this.registros.splice(index, 1);
    this.refresh();
  }
}
