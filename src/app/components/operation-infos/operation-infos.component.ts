import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-infos',
  templateUrl: './operation-infos.component.html',
  styleUrls: ['./operation-infos.component.css'],
})
export class OperationInfosComponent implements OnInit {
  @Input() operationName: string;
  constructor() {}
  isVisible = false;
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  ngOnInit(): void {}
}
