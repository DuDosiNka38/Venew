
import { GET_POSTS, Post, PostsActions } from "./types";

export function getPosts(posts:Post[]):PostsActions{
    return{
        type:GET_POSTS, 
        payload:{
            posts:posts.sort((a,b)=>{
                return +b.timestamp- (+a.timestamp)
            })
        }
    }
}
