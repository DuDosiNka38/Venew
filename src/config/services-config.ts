import UsersServiceFirebase from '../services/UsersServiceFirebase';
import UsersService from '../services/UsersService';
import AuthServiceFirebase from '../services/AuthServiceFireBase';
import AuthService from '../services/AuthService';

export const authService: AuthService = new AuthServiceFirebase();
export const usersService: UsersService = new UsersServiceFirebase('users');





