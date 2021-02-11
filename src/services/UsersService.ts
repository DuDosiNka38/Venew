import User from '../models/User';
import {Observable} from 'rxjs';

export default interface UsersService {
    addUser(user: User): Promise<any>;
    removeUser(id: number): Promise<any>;
    getAllUsers(): Observable<User[]>;
    updateUser(id: number, user: User): Promise<any>;
}

