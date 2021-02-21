import {LoginData} from '../components/library/LoginForm';

export default interface AuthService {
    login(loginData: LoginData): Promise<any>;
    logout(): Promise<boolean>;
}
