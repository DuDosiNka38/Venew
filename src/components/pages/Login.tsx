import React from 'react';
import LoginForm, {LoginData} from '../library/LoginForm/LoginForm';
import {authService} from '../../config/services-config';

const Login: React.FC = () => {
    async function onSubmit(loginData: LoginData): Promise<any> {
        return await authService.login(loginData);
    }
    function errorMessage(password: string): string {
        return password.length < 6 ? 'password can\'t be less than 6 symbols' : ''
    }
    return <LoginForm onSubmit={onSubmit} passwordErrorMessage={errorMessage} />
}

export default Login;