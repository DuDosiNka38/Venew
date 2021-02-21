import UsersService from './UsersService';
import firebase from "firebase";
import appFirebase from "../config/firebase-config";
import {UserData} from '../components/library/RegisterForm';

export default class UsersServiceFirebase implements UsersService {
    db: firebase.firestore.CollectionReference;
    constructor(db: string) {
        this.db = appFirebase.firestore().collection(db);
    }

    addUser(userData: UserData): Promise<any> {
        const {username, email, password} = userData;
        return appFirebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(createdUser => {
                createdUser.user?.updateProfile({
                    displayName: username
                })
                    .then(() => this.setUser(createdUser))
            })
            .catch((error) => console.log(error && error.message))
    }

    private setUser(createdUser: any) {
        return this.db.doc(createdUser.user.uid).set({
            name: createdUser.user.displayName,
            email: createdUser.user.email,
            uid: createdUser.user.uid,
            creationTime: createdUser.user.metadata.creationTime
        });
    }
}