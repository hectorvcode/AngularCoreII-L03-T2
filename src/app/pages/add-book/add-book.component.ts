import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'src/app/core/interfaces';
import { BooksFacade } from 'src/app/store';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  public addBookForm: Partial<IBook> = {};

  constructor(
    private readonly _booksFacade: BooksFacade,
    private readonly _router: Router,
  ) { }

  ngOnInit(): void {
  }

  public saveBook():void{
    if(this.addBookForm) {
      this._booksFacade.addBook(this.addBookForm as IBook);
      this._router.navigate(['books']);
    }
    
  }

}
