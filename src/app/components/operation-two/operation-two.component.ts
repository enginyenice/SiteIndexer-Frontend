import { Component, OnInit } from '@angular/core';
import { OperationTwoModel } from 'src/app/models/operation-two/operationTwoModel';
import { OperationTwoService } from 'src/app/services/operationTwo/operation-two.service';

@Component({
  selector: 'app-operation-two',
  templateUrl: './operation-two.component.html',
  styleUrls: ['./operation-two.component.css']
})
export class OperationTwoComponent implements OnInit {

  constructor(private operationTwoService:OperationTwoService) { }
  dataLoaded = false;
  send = false;
  ngOnInit(): void {
  }

  operationTwoData: OperationTwoModel;
  getKeyword(url:String){
    this.send=true;
    this.operationTwoService.getKeyword(url).subscribe(response => {
      this.operationTwoData = response.data;
      this.dataLoaded=true;  
      this.send=false;
      console.log(response)
    })
}
}
