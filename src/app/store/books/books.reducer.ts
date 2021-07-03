import { createReducer, on } from "@ngrx/store";
import { IBook } from "src/app/core/interfaces";
import { updateBook } from "./books.actions";

const INITIAL_STATE: IBook = {
    id: "",
    title: "", 
    description: "", 
    ageCount: 0, 
    publishDate:" "
};

export const bookReducer = createReducer(
    INITIAL_STATE,
    on(updateBook, (state, {id, title, description, ageCount, publishDate})=>({ id, title, description, ageCount, publishDate }))
)