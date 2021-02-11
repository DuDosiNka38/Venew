import {createStore, applyMiddleware, combineReducers} from 'redux';
import {usersReducer, userDataReducer} from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import User from "../models/User";
import {UserData} from '../services/AuthService';

export type ReducersType = {
    users: User[],
    userData: UserData
}

const rootReducer = combineReducers<ReducersType>({
    users: usersReducer,
    userData: userDataReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));