import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import styles from './Default.module.scss';


const DefaultHeader: React.FC = (props) => {
    return (
        <div className={styles['container']}>
            <div className={styles['navbar-items']}>
                <NavLink to=''>About us</NavLink>
                <NavLink to=''>Blog</NavLink>
                <NavLink to=''>How it works</NavLink>
                <NavLink to=''>FAQ</NavLink>
                <NavLink to=''>Support</NavLink>
                <span className={styles['nav-button-container']}>
                    <Button label={"Register"} variant="auth-head-reg" />
                    <Button label={"Login"} variant="auth-head-login" />
                </span>
            </div>
        </div>
    )
}

export default DefaultHeader;