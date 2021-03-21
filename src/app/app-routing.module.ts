import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationFourComponent } from './components/operation-four/operation-four.component';
import { OperationOneComponent } from './components/operation-one/operation-one.component';
import { OperationThreeComponent } from './components/operation-three/operation-three.component';
import { OperationTwoComponent } from './components/operation-two/operation-two.component';

const routes: Routes = [
  {path:"", component:OperationOneComponent},
  {path:"operation-one", component:OperationOneComponent},
  {path:"operation-two", component:OperationTwoComponent},
  {path:"operation-three", component:OperationThreeComponent},
  {path:"operation-four", component:OperationFourComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
