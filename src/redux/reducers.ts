import User from '../models/User';
import {UserData} from '../services/AuthService';
import {SET_USERS, SET_USER_DATA} from './actions';

export const usersReducer = (users: User[] = [], action: {type: string, payload: any}): User[] =>
    action.type === SET_USERS ? action.payload.slice(0) : users

export const userDataReducer = (userData: UserData = {isAdmin: false, username: ''}, action: {type: string, payload: any}): UserData =>
    action.type === SET_USER_DATA ? action.payload as UserData : userData

