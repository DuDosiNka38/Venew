import User from "../models/User";
import {UserData} from '../services/AuthService';
export const SET_USERS = 'SET_USERS';
export const SET_USER_DATA = 'SET_USER_DATA';

export const usersAction = (users: User[]): {type: string, payload: any} =>
    ({type: SET_USERS, payload: users});
export const userDataAction = (userData: UserData): {type: string, payload: any} =>
    ({type: SET_USER_DATA, payload: userData})
