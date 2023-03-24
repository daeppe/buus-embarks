import { createContext } from 'react';
import { LoginResultType } from '../../types/Login';
import { UserType } from '../../types/User';

export type AuthContextType = {
    user: UserType | null
    login: (username: string, password: string) => LoginResultType
    logout: () => void

}

export const AuthContext = createContext<AuthContextType>(null!);