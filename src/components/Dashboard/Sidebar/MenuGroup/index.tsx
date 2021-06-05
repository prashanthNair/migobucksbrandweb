import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MenuGroup.module.scss';

export interface IMenuLinks {
    path: string;
    label: string;
}

export interface IMenuGroupProps {
    title: string;
    items?: IMenuLinks[];
}

const MenuGroup: React.FC<IMenuGroupProps> = (props) => {
    const { title, items } = props;
    return (
        <React.Fragment>
            <div className={styles['menu-head']}>
                <span>{title}</span>
            </div>
            <div className={styles['menu-items']}>
                {
                    !!items && items.map(el => <NavLink key={el.path} activeClassName={styles['active']} to={el.path}>{el.label}</NavLink>)
                }
            </div>
        </React.Fragment>
    )
}

export default MenuGroup;