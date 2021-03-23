import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-operation-infos',
  templateUrl: './operation-infos.component.html',
  styleUrls: ['./operation-infos.component.css'],
})
export class OperationInfosComponent implements OnInit {
  @Input() operationName: string;
  constructor(private modal: NzModalService) {}
  isVisible = false;
  operationOneTitle = 'Sayfada Geçen Kelimelerin Frekanslarını Hesaplama';
  operationOneText =  'Url içeriğinde (Url’in gösterdiği sayfa içeriğinde) her kelimenin kaçar defa yer aldığını (frekansını)  hesaplar.';

  operationTwoTitle = 'Sayfada geçen anahtar kelimeleri hesaplama';
  operationTwoText =  'Url içeriğinde (Url’in gösterdiği sayfa içeriğinde) bulunan anahtar kelimeleri ve kaçar defa yer aldığını (frekansını) hesaplar.';

  operationTreeTitle = 'URL havuzu arasında benzerlik skorlaması';
  operationTreeText =  'Girilen Url içeriğinde (Url’in gösterdiği sayfa içeriğinde) bulunan anahtar kelimeler yardımı ile birbirlerine olan benzerliklerini hesaplar.';

  operationFourTitle = 'Sayfada Geçen Kelimelerin Frekanslarını Hesaplama';
  operationFourText =  'Url içeriğinde (Url’in gösterdiği sayfa içeriğinde) her kelimenin kaçar defa yer aldığını (frekansını)  hesaplar.';

  operationFiveTitle = 'Eklenmedi';
  operationFiveText =  'Eklenmedi';

  modalTitle: string;
  modalDescription: string;
  confirmModal?: NzModalRef;
  showConfirm(): void {
    this.confirmModal = this.modal.info({
      nzTitle: this.modalTitle,
      nzContent: this.modalDescription,
    });
  }
  ngOnInit(): void {
    switch (this.operationName) {
      case 'operationOne':
        this.modalTitle = this.operationOneTitle;
        this.modalDescription = this.operationOneText;
        break;
      case 'operationTwo':
        this.modalTitle = this.operationTwoTitle;
        this.modalDescription = this.operationTwoText;
        break;
      case 'operationTree':
        this.modalTitle = this.operationTreeTitle;
        this.modalDescription = this.operationTreeText;
        break;
      case 'operationFour':
        this.modalTitle = this.operationFourTitle;
        this.modalDescription = this.operationFourText;
        break;
      case 'operationFive':
        this.modalTitle = this.operationFiveTitle;
        this.modalDescription = this.operationFiveText;
        break;
      default:
        this.modalTitle = "Yardım başlık";
        this.modalDescription = "Yardım içerik";
        break;
    }
  }
}
