import { Component, OnInit } from '@angular/core';
import { BooksFacade } from 'src/app/store';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  public books$ = this._booksFacade.books$;

  constructor(private readonly _booksFacade: BooksFacade) {}

  ngOnInit(): void {}
}
