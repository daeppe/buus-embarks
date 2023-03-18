import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Embarks } from '../pages/Embarks';
import { Login } from '../pages/Login';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/embarks' element={<Embarks />} />
        </Routes>
    );
};