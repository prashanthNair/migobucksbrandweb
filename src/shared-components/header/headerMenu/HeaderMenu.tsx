import React from 'react';

import style from './HeaderMenu.module.scss';

function HeaderMenu(props: any) {
    return (
        <div className={style["menu-list"]}>
           <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Help</li>
           </ul>
        </div>
    )
}

export default HeaderMenu;
