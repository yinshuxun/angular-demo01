import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './my-module.module';
import { Error2Component } from './error2/error2.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  providers: [],
  declarations: [Error2Component],
  exports: [Error2Component, SharedModule],
})
export class Shared2Module {}
