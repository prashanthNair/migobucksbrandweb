import React from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '../../../../components/Button/Button';
import { submitLogin } from '../../redux/auth.action';
import style from './Login.module.scss';

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory();

    const handleSubmit = (e: any) => {
        e.preventDefault()
        // history.push('/dashboard')
        dispatch(submitLogin('sample data'))
    }
const navigate = () => {
    history.push('/auth/register')
}
    return (
        <div className={style['container']}>
            <div className={style['card']}>
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" />
                    <input type="password" />
                    <Button type="submit" label="Submit"/>
                    <Button type="button" onClick={navigate} label="Reister"/>
                </form>
            </div>
        </div>
    )
}

export default Login;
