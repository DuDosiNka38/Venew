import {UserData} from '../components/library/RegisterForm';

export default interface UsersService {
    addUser(userData: UserData): Promise<any>;
}

