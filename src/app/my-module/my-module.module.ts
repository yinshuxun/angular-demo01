import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyModuleComponent } from './my-module.component';
import { MyModuleRoutingModule } from './routing.module';
import { Shared2Module } from '../common/shared2.module';
import { ErrorComponent } from '../common/error/error.component';

@NgModule({
  imports: [CommonModule, MyModuleRoutingModule,Shared2Module],
  declarations: [MyModuleComponent,ErrorComponent],
  exports:[ErrorComponent]
})
export class MyModuleModule {}
