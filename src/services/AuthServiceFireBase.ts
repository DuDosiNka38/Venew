import AuthService, {UserData} from './AuthService';
import {Observable, of} from 'rxjs';
import {LoginData} from '../components/library/LoginForm';
import {authState} from 'rxfire/auth';
import {docData} from 'rxfire/firestore';
import appFirebase from '../config/firebase-config';
import firebase from 'firebase';
import {mergeMap, map} from 'rxjs/operators';

export default class AuthServiceFirebase implements AuthService {
    getUserData(): Observable<UserData> {
        return authState(appFirebase.auth())
            .pipe(mergeMap<firebase.User, Observable<UserData>>(user => {
                if (!!user) {
                    return user.email ?
                        docData(appFirebase.firestore().collection('users')
                            .doc(user.email as string))
                            .pipe(map((doc: any) => ({username: user.uid, isAdmin: !!doc && !!doc.uid}))) :
                        of({username: user.uid, isAdmin: false})
                }
                return of({username: '', isAdmin: false});
            }))
    }

    login(loginData: LoginData): Promise<any> {
        if (!loginData.password) {
            return AuthServiceFirebase.socialNetworkAuth(loginData.username);
        }
        return appFirebase.auth()
            .signInWithEmailAndPassword(loginData.username, loginData.password)
            .then((authData) => console.log(authData))
            .catch((error) => console.log(error && error.message));
    }

    logout(): Promise<boolean> {
        return appFirebase.auth().signOut().then(() => true).catch((error) => false);
    }

    private static socialNetworkAuth(providerName: string): Promise<boolean> {
        const authProvider = AuthServiceFirebase.getProvider(providerName);
        if (!authProvider) {
            return Promise.resolve(false);
        }
        return appFirebase.auth().signInWithPopup(authProvider)
            .then(() => true).catch(() => false);
    }

    private static getProvider(providerName: string): firebase.auth.AuthProvider | undefined {
        let res: firebase.auth.AuthProvider | undefined
        switch (providerName) {
            case 'google':
                res = new firebase.auth.GoogleAuthProvider();
                break;
            case 'twitter':
                res = new firebase.auth.TwitterAuthProvider();
                break;
            case 'facebook':
                res = new firebase.auth.FacebookAuthProvider();
                break;
            default:
                res = undefined;
        }
        return res;
    }
}