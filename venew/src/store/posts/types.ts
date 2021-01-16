

export const GET_POSTS = 'GET_POSTS';

interface GetPostsAction  {
    type: typeof GET_POSTS
    payload:{
        posts:Post[]
    }
}

export interface PostsState{
    posts:Post[]
}


export interface Post{
    id:number
    userHandle:string 
    body:string
    timestamp:string
    likeCount:number
    usersLike:boolean
    commentCount:number
    userImage:string
}

export type PostsActions = GetPostsAction