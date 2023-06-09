import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { ContainerLogin } from './styles';
import { Button } from '@mui/material';

type FormProps = {
    username: string;
    password: string;
}


export const Login = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const userSchema = yup.object({
        username: yup.string().required('Campo obrigatório (John Doe)'),
        password: yup.string().min(6, 'Mínimo de 6 dígitos (123456)').required('Campo obrigatório (123456)')
    });

    const { register, handleSubmit, formState: { errors }
    } = useForm<FormProps>({
        resolver: yupResolver(userSchema)
    });

    const onSubmit = (data: FormProps) => {
        const output = auth.login(data.username, data.password);
        if (output.result) {
            navigate('/embarks');
        }
        else {
            alert(output.err);
        }

    };

    return (<ContainerLogin>
        <h2>Acesso</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='textfield'>
                <TextField id="outlined-basic" label="Username" variant="outlined" {...register('username')} />
                {errors.username?.message && <p>{errors.username?.message}</p>}
            </div>
            <div className='textfield'>
                <TextField id="outlined-basic" label="Password" variant="outlined" {...register('password')} />
                {errors.password?.message && <p>{errors.password?.message}</p>}
            </div>
            <Button variant="contained" type='submit'>Logar</Button>
        </form>
    </ContainerLogin>);
};