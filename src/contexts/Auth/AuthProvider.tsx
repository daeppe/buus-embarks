import React, { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../services/api';
import { User } from '../../types/User';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        console.log('está vindo');
        const validateToken = () => {
            const storageData = localStorage.getItem('@buus-embarks');
            console.log(storageData);
            if (storageData) {
                const data = api.validateToken(storageData);
                if (data) {
                    setUser({ username: data.username });
                }
            }
        };
        validateToken();
    }, []);

    const login = (username: string, password: string) => {
        const data = api.login({ username, password });
        if (data.result) {
            setUser(data.user!);
            localStorage.setItem('@buus-embarks', data.token!);
            return data;
        }
        return data;
    };

    const logout = () => {
        if (api.logout()) {
            localStorage.clear();
        }

    };

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};