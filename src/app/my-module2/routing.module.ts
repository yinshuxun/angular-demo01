import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyModule2Component } from './my-module2.component';

const routes: Routes = [
  {
    path: '',
    component: MyModule2Component,
    children: []

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyModule2RoutingModule {}
