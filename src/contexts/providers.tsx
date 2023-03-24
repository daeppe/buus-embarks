import React from 'react';
import { AuthProvider } from './Auth/AuthProvider';
import { EmbarksProvider } from './Embarks/EmbarksProvider';

export const Providers = ({ children }: { children: JSX.Element }) => {
    return (
        <AuthProvider>
            <EmbarksProvider>
                {children}
            </EmbarksProvider>
        </AuthProvider>
    );
};