import { createReducer, on } from "@ngrx/store";
import { IBook, IBookStore } from "src/app/core/interfaces";
import { addBook, updateBook, updateNameBook } from "./books.actions";

const INITIAL_STATE: IBookStore = {
    books: [  { id:'1', 
                title: 'Book Title', 
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi error natus tempora illum, corporis laudantium quibusdam voluptatibus veniam aut nulla a asperiores repellendus facilis nostrum vel non rerum qui officia.', 
                pageCount: 170, 
                publishDate: 2020 },
                { id:'2', 
                title: 'Book Title', 
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi error natus tempora illum, corporis laudantium quibusdam voluptatibus veniam aut nulla a asperiores repellendus facilis nostrum vel non rerum qui officia.', 
                pageCount: 170, 
                publishDate: 2020 },
                { id:'3', 
                title: 'Book Title', 
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi error natus tempora illum, corporis laudantium quibusdam voluptatibus veniam aut nulla a asperiores repellendus facilis nostrum vel non rerum qui officia.', 
                pageCount: 170, 
                publishDate: 2020 },
                { id:'4', 
                title: 'Book Title', 
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi error natus tempora illum, corporis laudantium quibusdam voluptatibus veniam aut nulla a asperiores repellendus facilis nostrum vel non rerum qui officia.', 
                pageCount: 170, 
                publishDate: 2020 },
                { id:'5', 
                title: 'Book Title', 
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi error natus tempora illum, corporis laudantium quibusdam voluptatibus veniam aut nulla a asperiores repellendus facilis nostrum vel non rerum qui officia.', 
                pageCount: 170, 
                publishDate: 2020 },
                { id:'6', 
                title: 'Book Title', 
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi error natus tempora illum, corporis laudantium quibusdam voluptatibus veniam aut nulla a asperiores repellendus facilis nostrum vel non rerum qui officia.', 
                pageCount: 170, 
                publishDate: 2020 },
            ],
};

export const bookReducer = createReducer(
    INITIAL_STATE,
    on(addBook, (state, action) => ({ ...state, books:[...state.books, action.newBook] }))
);