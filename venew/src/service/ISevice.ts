import {serviseCode} from '../types/dataTypes';
import {Observable} from 'rxjs';
import { Post } from '../store/posts/types';




export default interface IServise {
    //posts
    getPosts():Observable<Post[]>;
    setPost(post:Post):Promise<void>;
    getPost(postId:number):Promise<Post>;
    updatePost(postId:number, post:Post):Promise<void>;
    deletePost(postId:number):Promise<any>;
    likePost(postId:number):Promise<serviseCode>;
    unlikePost(postId:number):Promise<serviseCode>;
    commentPost(postId:number):Promise<serviseCode>;

    // //users
    // signUpUser(user:signUp):serviseCode;
    // logIn(data:userData):serviseCode;
    // uploadImage(img:string):serviseCode;
    // addUserDetails(user:user):serviseCode;
    // //getAUthenticatedUser
    // getUserDetails(userId:number):user;
    // //notification

}