import React from 'react';

import { useHistory } from 'react-router';

import style from './Register.module.scss';

function Register() {
    const history = useHistory();
    const handleSubmit = (e: any) => {
        e.preventDefault()
        history.push('/auth/login')
    }

    return (
        <div className={style['container']}>
            <div className={style['card']}>
                <h3>Register</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" />
                    <input type="password" />
                    <button type="submit" >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register
