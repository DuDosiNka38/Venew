import {SET_USER, CLEAR_USER, UserActions} from './types';

export const setUser = (user: any): UserActions => {
    return {
        type: SET_USER,
        payload: {
            currentUser: user,
        }
    }
}

export const clearUser = (): UserActions => {
    return {
        type: CLEAR_USER
    }
}
