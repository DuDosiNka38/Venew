import { PostsState, PostsActions, GET_POSTS } from "./types";

const init:PostsState={
    posts:[]
}

export function postsReducer(state=init,action:PostsActions):PostsState{
    switch(action.type){
        case GET_POSTS: return {...state, posts:action.payload.posts}
        default: return state
    }
}