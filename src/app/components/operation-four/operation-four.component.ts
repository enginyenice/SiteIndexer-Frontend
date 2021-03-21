import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-four',
  templateUrl: './operation-four.component.html',
  styleUrls: ['./operation-four.component.css']
})
export class OperationFourComponent implements OnInit {
  constructor() { }

  urlList = new Array();

  addUrl(text:string){
    var control = false;
    if(text != " " && text!= ""){
        this.urlList.forEach(p=> {if(p === text) control=true;});
        if(!control)
          this.urlList.push(text); 
    }        
  }
  removeUrl(index:number){
    this.urlList.splice(index,1);
  }
  ngOnInit(): void {
  }
}
