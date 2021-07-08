import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './store/root.reducer';
import { BooksFacade } from './store';
import { BookListComponent } from './pages/book-list/book-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(rootReducer),
    AppRoutingModule
  ],
  providers: [BooksFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
