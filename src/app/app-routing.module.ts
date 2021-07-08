import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "books", component: BookListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
