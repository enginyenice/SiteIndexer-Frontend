import { Component, OnInit } from '@angular/core';
import { OperationThreeModel } from 'src/app/models/operation-three/operationThreeModel';
import { OperationThreeService } from 'src/app/services/operationThree/operation-three.service';

@Component({
  selector: 'app-operation-three',
  templateUrl: './operation-three.component.html',
  styleUrls: ['./operation-three.component.css']
})
export class OperationThreeComponent implements OnInit {

  constructor(private operationThreeService:OperationThreeService) { }
  control = false;
  visible = "visible";
  hidden = "hidden";

  ngOnInit(): void {
  }
 
  closeLoading(){
    this.control=false;
  }

  result : OperationThreeModel;

  getSimilarity(Url1:string,Url2:string){
    this.control= true;
    try {
      this.operationThreeService.getSimilarity(Url1,Url2).subscribe(response => {
        if(this.control){
          this.result = response.data;
          this.control= false;
        }
        });
    } catch (error) {
      this.control= false;
    }
  }
}
