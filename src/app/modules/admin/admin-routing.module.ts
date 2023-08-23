import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministartorComponent } from './administartor/administartor.component';

const routes: Routes = [{
  path:'',component:AdministartorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
