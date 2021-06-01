import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MyInventory.module.scss';

const MyInventory: React.FC = (props) => {
    return(
        <React.Fragment>
            <div className={styles['tab-group']}>
                <NavLink activeClassName={styles['active']} to={"/dashboard/my-inventory/active-products"}>Active Products</NavLink>
                <NavLink activeClassName={styles['active']} to={"/dashboard/my-inventory/inactive-products"}>Inactive Products</NavLink>
            </div>
        </React.Fragment>
    )
}

export default MyInventory;