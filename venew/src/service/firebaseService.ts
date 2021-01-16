import { serviseCode } from "../types/dataTypes";
import IServise from "./ISevice";
import {Observable} from "rxjs";
import firebase from "firebase";
import appFirebase from "../config/firebase-config";
import {collectionData} from "rxfire/firestore";
import {map} from 'rxjs/operators'
import { Post } from "../store/posts/types";




export default class firebaseService implements IServise{
    db:firebase.firestore.CollectionReference;
    constructor(db: string){
        this.db = appFirebase.firestore().collection(db);
    }
    
    async exists(id: number): Promise<boolean> {
        const doc = await this.db.doc(id.toString()).get();
        return doc.exists;//returns Promise with true if the document exists
    }
    
    async updatePost(postId: number, post: Post): Promise<void> {
        if(!await this.exists(postId)) {
            throw `post with id ${postId} doesn't exists`;
        }
        return this.setPost(post);
    }
    

    getPosts(): Observable<Post[]> {
        return collectionData<Post>(this.db)
    }
   
    setPost(post: Post): Promise<void> {
        return this.db.doc(post.id.toString()).set(post)
    }
    getPost(postId: number): Promise<Post> {
        throw new Error("Method not implemented.");
    }
    async deletePost(postId: number): Promise<any> {
        if(!await this.exists(postId)) {
            throw `employee with id ${postId} doesn't exists`;
        }

        return this.db.doc(postId.toString()).delete();
    }
    likePost(postId: number): Promise<serviseCode> {
        throw new Error("Method not implemented.");
    }
    unlikePost(postId: number): Promise<serviseCode> {
        throw new Error("Method not implemented.");
    }
    commentPost(postId: number): Promise<serviseCode> {
        throw new Error("Method not implemented.");
    }

}