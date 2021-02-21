import React from 'react';
import RegisterForm, {UserData} from "../library/RegisterForm/RegisterForm";
import {usersService} from '../../config/services-config';

const Register: React.FC = () => {

    async function onSubmit(userData: UserData): Promise<any> {
        return await usersService.addUser(userData);
    }

    return <RegisterForm onSubmit={onSubmit} />
}

export default Register;
