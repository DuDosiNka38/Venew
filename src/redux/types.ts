export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

interface SetUserAction {
    type: typeof SET_USER;
    payload: {
        currentUser: any;
    }
}

interface ClearUserAction {
    type: typeof CLEAR_USER;
}

export interface UserState {
    currentUser: any;
    isLoading: boolean;
}

export type UserActions = SetUserAction | ClearUserAction;