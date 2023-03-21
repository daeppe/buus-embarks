import React, { useContext } from 'react';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { Embarks } from '../pages/Embarks';
import { Login } from '../pages/Login';

export const AuthRouters = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);

    if (!auth.user) {
        return <Login />;
    }

    if (auth.user) {
        return <Embarks />;
    }

    return children;
};