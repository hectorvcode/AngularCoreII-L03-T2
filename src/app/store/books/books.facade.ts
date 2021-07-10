import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, IBook } from 'src/app/core/interfaces';
import { addBook } from './books.actions';
import { booksSelector } from './books.selectors';

@Injectable({
  providedIn: 'root',
})
export class BooksFacade {
  public readonly books$ = this._store.select(booksSelector);

  constructor(private readonly _store: Store<IAppState>) {}

  public addBook(book: IBook): void {
    this._store.dispatch(addBook({ newBook: book }));
  }
}
