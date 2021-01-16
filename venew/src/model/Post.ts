export default interface Post{
    id:number,
    userHandle:string, 
    body:string,
    timestamp:string,
    likeCount:number,
    commentCount:number,
    userImage:string
 };

 export type post = {
    userHandle:string,
    body:string,
    timestamp:string,
    likeCount:number,
    commentCount:number,
    userImage:string
}