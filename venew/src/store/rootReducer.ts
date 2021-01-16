import { combineReducers } from "redux";
import { postsReducer } from "./posts/reducers";


export const rootReducer = combineReducers({
    posts:postsReducer
})

export type RootState = ReturnType < typeof rootReducer >