import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Embarks } from '../pages/Embarks';
import { Login } from '../pages/Login';
import { AuthRouters } from './authRouters';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<AuthRouters><Login /></AuthRouters>} />
            <Route path='/embarks' element={<AuthRouters><Embarks /></AuthRouters>} />
        </Routes>
    );
};