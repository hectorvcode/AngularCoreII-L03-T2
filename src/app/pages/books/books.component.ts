import { Component, OnInit } from '@angular/core';
import { BooksFacade } from '../../store';
//import { BooksFacade } from 'src/app/store/books/books.facade';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books$ =  this._booksFacade.books$;

  constructor(private readonly _booksFacade: BooksFacade) { }

  ngOnInit(): void {
  }

}
