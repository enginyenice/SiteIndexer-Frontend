import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationOneComponent } from './components/operation-one/operation-one.component';
import { OperationTwoComponent } from './components/operation-two/operation-two/operation-two.component';

const routes: Routes = [
  {path:"", component:OperationOneComponent},
  {path:"operation-one", component:OperationOneComponent},
  {path:"operation-two", component:OperationTwoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
