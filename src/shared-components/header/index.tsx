import React, { useState, useEffect } from 'react';

import styles from './Header.module.scss';

import AuthenticatedHeader from './Authenticated';
import DefaultHeader from './Default';

import logo from '../../assets/BrandsLogo.svg'

const Header: React.FC = (props) => {

    const [ isAuthenticated, setAuthenticated ] = useState<boolean>(true);

    useEffect(() => {
        //TODO: Implement function to check user auth and setAuthenticated -> true
    }, []);

    return (
        <div className={styles['header-container']}>
            <div className={styles['logo']}>
                <img src={logo} alt="logo" />
            </div>
            {
                isAuthenticated
                ? <AuthenticatedHeader searchPlaceholder="Search" />
                : <DefaultHeader />
            }
        </div>
    )
}

export default Header;