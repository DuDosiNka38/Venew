import React from 'react';
import LoginForm, {LoginData} from '../library/LoginForm/LoginForm';
import {authService} from '../../config/services-config';

const Login: React.FC = () => {
    async function onSubmit(loginData: LoginData): Promise<any> {
        return await authService.login(loginData);
    }

    return <LoginForm onSubmit={onSubmit} />
}

export default Login;