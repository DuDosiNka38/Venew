import {CLEAR_USER, SET_USER, UserActions, UserState} from './types';

const initialState: UserState = {
    currentUser: null,
    isLoading: true
}

export const userReducer = (state = initialState, action: UserActions) => {
    switch (action.type) {
        case SET_USER:
            return {
                currentUser: action.payload.currentUser,
                isLoading: false
            }
        case CLEAR_USER:
            return {
                ...initialState,
                isLoading: false
            }
        default:
            return state;
    }
}

