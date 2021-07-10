import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "books", component: BookListComponent},
  {path: "add-book", component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
