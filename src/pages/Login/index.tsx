import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/embarks');
    };

    return (<div>
        <h2>Tela Login</h2>
        <button onClick={handleLogin}>Logar</button>
    </div>);
};