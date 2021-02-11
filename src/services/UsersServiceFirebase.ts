import UsersService from './UsersService';
import firebase from "firebase";
import appFirebase from "../config/firebase-config";
import User from "../models/User";
import {Observable} from "rxjs";
import {collectionData} from "rxfire/firestore";

export default class UsersServiceFirebase implements UsersService {
    db: firebase.firestore.CollectionReference;
    constructor(db: string) {
        this.db = appFirebase.firestore().collection(db);
    }

    async exists(id: number): Promise<boolean> {
        const doc = await this.db.doc(id.toString()).get();
        return doc.exists; //returns Promise with true if the document exists
    }

    async addUser(user: User): Promise<any> {
        const res: boolean = await this.exists(user.id);
        if (res) {
            console.log(`user with id ${user.id} already exists`)
        }
        return appFirebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(createUser => {
                createUser.user?.updateProfile({
                    displayName: user.username,
                })
                    .then(() => this.setUser(user))
            })
            .catch((error) => console.log(error && error.message))
    }

    private setUser(user: User) {
        const userData = {
            name: user.username,
            email: user.email,
            id: user.id,
            created: user.created
        }
        return this.db.doc(user.id.toString()).set(userData);
    }

    async removeUser(id: number): Promise<any> {
        if (!await this.exists(id)) {
            alert(`user with id ${id} doesn't exist`);
        }

        return this.db.doc(id.toString()).delete();
    }

    async updateUser(id: number, user: User): Promise<any> {
        if (!await this.exists(id)) {
            alert(`user with id ${id} doesn't exist`);
        }

        return this.setUser(user);
    }

    getAllUsers(): Observable<User[]> {
        return collectionData<User>(this.db);
    }
}