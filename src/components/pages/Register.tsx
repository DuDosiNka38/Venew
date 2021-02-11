import React from 'react';
import RegisterForm from "../library/RegisterForm/RegisterForm";
import User from '../../models/User';
import {usersService} from '../../config/services-config';
import {useSelector} from "react-redux";
import {ReducersType} from '../../redux/store'

const Register: React.FC = () => {
    const users: User[] = useSelector((state: ReducersType) => state.users)

    async function onSubmit(user: User): Promise<any> {
        return await usersService.addUser(user);
    }

    return <RegisterForm users={users} onSubmit={onSubmit} />
}

export default Register;
