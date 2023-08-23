import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
{
  path:'login',component:LoginComponent
},
{
  path:'admin',loadChildren:()=> import('./modules/admin/admin.module').then((m)=>m.AdminModule),
  canActivate: [authGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
