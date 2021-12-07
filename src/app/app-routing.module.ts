import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'module1',
    loadChildren: () =>
      import('../app/my-module/my-module.module').then((M) => M.MyModuleModule),
  },
  {
    path: 'module2',
    loadChildren: () =>
      import('../app/my-module2/my-module2.module').then(
        (M) => M.MyModule2Module
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
