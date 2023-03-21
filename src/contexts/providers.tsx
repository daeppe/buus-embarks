import React from 'react';
import { AuthProvider } from './Auth/AuthProvider';

export const Providers = ({ children }: { children: JSX.Element }) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};