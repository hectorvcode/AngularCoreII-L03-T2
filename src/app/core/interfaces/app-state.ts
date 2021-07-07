import { IBook } from "./book";
import { IBookStore } from "./book-store";

export interface IAppState {
    bookState: IBookStore;
}

