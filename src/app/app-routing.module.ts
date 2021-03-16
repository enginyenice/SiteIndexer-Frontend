import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationOneComponent } from './components/operation-one/operation-one.component';

const routes: Routes = [
  {path:"", component:OperationOneComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
