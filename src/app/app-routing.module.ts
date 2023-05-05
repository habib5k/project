import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { CategoriesComponent } from '../app/categories/categories.component';
const routes: Routes = [
  { path: 'cat', component: CatComponent },
  {path :'categories' ,component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
