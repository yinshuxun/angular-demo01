import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyModule2Component } from './my-module2.component';
import { MyModule2RoutingModule } from './routing.module';
import { Shared2Module } from '../common/shared2.module';
import { MyServiceService } from '../my-service.service';
import { MyModuleModule } from '../my-module/my-module.module';

@NgModule({
  imports: [
    CommonModule,
    MyModule2RoutingModule,
    Shared2Module,
    MyModuleModule
  ],
  declarations: [MyModule2Component],
  providers:[MyServiceService]
})
export class MyModule2Module { }
