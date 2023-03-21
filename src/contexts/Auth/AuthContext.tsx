import { createContext } from 'react';
import { LoginResultType } from '../../types/Login';
import { User } from '../../types/User';

export type AuthContextType = {
    user: User | null
    login: (username: string, password: string) => LoginResultType
    logout: () => void

}

export const AuthContext = createContext<AuthContextType>(null!);