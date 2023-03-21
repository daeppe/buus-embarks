import { User } from '../types/User';
import { decodeToken } from 'react-jwt';
import { TOKEN } from '../utils/env';

const getToken = () => {
    return TOKEN;
};

export const api = {
    login: (user: User) => {
        if (user.username === 'John Doe') {
            if (user.password === '123456') {
                return {
                    token: getToken(),
                    user,
                    result: true
                };
            }
            return { err: 'Dados incorretos (123456)', result: false };
        }
        return { err: 'Dados incorretos (John Doe)', result: false };
    },
    logout: () => true,
    validateToken: (token: string): User => {
        console.log(decodeToken(token!));
        return decodeToken(token)!;
    }
};