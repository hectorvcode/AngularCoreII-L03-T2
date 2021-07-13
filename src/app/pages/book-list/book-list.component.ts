import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/services/books.service';
import { BooksFacade } from 'src/app/store';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public books$ = this._booksFacade.books$;
  
  constructor(private readonly _booksFacade: BooksFacade, 
    private readonly _bookService: BooksService) { }

  async ngOnInit() {
    //debugger
    const bookList = await this._bookService.getBooksList();
    bookList.forEach((book)=>{
      console.log(book);
      this._booksFacade.addBook(book);
    });

    // for(let i = 0; i < bookList.length; i++){
    //   console.log(bookList[i]);
    // }
  }

}
