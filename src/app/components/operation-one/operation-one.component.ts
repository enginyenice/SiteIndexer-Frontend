import { Component, OnInit } from '@angular/core';
import { OperationOneModel } from 'src/app/models/operation-one/operationOneModel';
import { OperationOneService } from 'src/app/services/operationOne/operation-one.service';

@Component({
  selector: 'app-operation-one',
  templateUrl: './operation-one.component.html',
  styleUrls: ['./operation-one.component.css']
})
export class OperationOneComponent implements OnInit {

  
  constructor(private operationOneService:OperationOneService) { }

  ngOnInit(): void {
  }
  
  operationOneData: OperationOneModel;
  getFrequency(url:String){
    this.operationOneService.getFrequency(url).subscribe(response => {
      this.operationOneData = response.data;
      
      console.log(response)
    })
  
  
  /*
   this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
      this.dataLoaded = true;
    })
    */
  }


}
