import { createAction, props } from "@ngrx/store";
import { create } from "domain";
import { IBook } from "src/app/core/interfaces";


export const updateBook =  createAction('[id] Update id', props<IBook>());
