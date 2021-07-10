import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookForm = {
    id: "",
    title: "",
    description:"",
    pageCount: 0,
    publishDate: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  public saveBook():void{
    // console.log(
    //   `id: ${this.addBookForm.id}
    //    title: ${this.addBookForm.title}
    //    description: ${this.addBookForm.description}
    //    pageCount: ${this.addBookForm.pageCount}
    //    publishDate: ${this.addBookForm.publishDate}
    // `);
    console.log(this.addBookForm);
    
  }

}
