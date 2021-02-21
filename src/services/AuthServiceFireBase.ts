import AuthService from './AuthService';
import {LoginData} from '../components/library/LoginForm';
import appFirebase from '../config/firebase-config';
import firebase from 'firebase';

export default class AuthServiceFirebase implements AuthService {

    login(loginData: LoginData): Promise<any> {
        if (!loginData.password) {
            return AuthServiceFirebase.socialNetworkAuth(loginData.username);
        }
        return appFirebase.auth()
            .signInWithEmailAndPassword(loginData.username, loginData.password)
            .then((signedUser) => console.log(signedUser))
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