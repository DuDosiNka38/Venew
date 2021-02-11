import {Observable} from 'rxjs';
import {LoginData} from '../components/library/LoginForm';

export type UserData = {
    username: string;
    isAdmin: boolean;
}

export default interface AuthService {
    getUserData(): Observable<UserData>;
    login(loginData: LoginData): Promise<any>;
    logout(): Promise<boolean>;
}
