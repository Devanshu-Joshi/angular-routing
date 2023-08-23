import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdministartorComponent } from './administartor/administartor.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AdministartorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
