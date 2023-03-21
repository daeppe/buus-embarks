import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export const Embarks = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const handleLogout = () => {
        auth.logout();
        navigate('/');
        location.reload();
    };
    return (<>
        <h2>Tela Embarks</h2>
        <button onClick={handleLogout}>Logout</button>
    </>
    );
};