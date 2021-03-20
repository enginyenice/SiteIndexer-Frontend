import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemResponseModel } from 'src/app/models/itemResponseModel';
import { OperationThreeModel } from 'src/app/models/operation-three/operationThreeModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationThreeService {

  constructor(private httpClient:HttpClient) { }
  apiUrl = environment.apiUrl+"urlsimilaritycalculate";
  
  getSimilarity(Url1:string,Url2:string):Observable<ItemResponseModel<OperationThreeModel>> 
  {
    return this.httpClient.post<ItemResponseModel<OperationThreeModel>>(this.apiUrl,{webSite : {url:Url1}, webSitePool : [{url:Url2}]});
  }
}
