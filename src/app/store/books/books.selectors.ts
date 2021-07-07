import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAppState, IBookStore } from "src/app/core/interfaces";

export const bookStateSelector = createFeatureSelector<IAppState, IBookStore>('bookState');

export const booksSelector =  createSelector(bookStateSelector, bookState => bookState.books);