import { UserType } from '../types/User';
import { decodeToken } from 'react-jwt';
import { TOKEN } from '../utils/env';
import { EmbarksMock } from '../mocks/database';

const getToken = () => {
    return TOKEN;
};

export const api = {
    login: (user: UserType) => {
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
    validateToken: (token: string): UserType => {
        return decodeToken(token)!;
    },
    embarks: (startDate: Date, endDate: Date) => {
        const chosenEmbarks = EmbarksMock.filter(embark => {
            if (embark.departureTime > startDate && embark.departureTime < endDate) {
                return embark;
            }
        });
        return chosenEmbarks || [];
    }

};