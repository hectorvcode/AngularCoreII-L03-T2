import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IBook } from '../../core/interfaces';
import { BooksFacade } from '../../store';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  public addBookForm: Partial<IBook> = {};
  // public addBookFormReactive: FormGroup;

  constructor(
    private readonly _booksFacade: BooksFacade,
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // this.addBookFormReactive = this._formBuilder.group({
    //   id: ['', Validators.required],
    //   title: ['', [Validators.required, Validators.pattern(/[a-zA-Z ]*/)]]
    // })
  }

  public saveBook(): void {
    if (this.addBookForm) {
      this._booksFacade.addBook(this.addBookForm as IBook);
      this._router.navigate(['books']);
    }
  }
}
