import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BooksFacade } from 'src/app/store';
import { Observable } from 'rxjs';
import { IBook } from '..';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  private apiBooks ="https://fakerestapi.azurewebsites.net/api/v1/Books";

  constructor(private http: HttpClient, private facade: BooksFacade) { }

  public async getBooksList() {
    const books = await this.http.get<IBook[]>(this.apiBooks).toPromise();

    const sliceBooks = books.slice(0, 5);

    return sliceBooks;

  };
}
