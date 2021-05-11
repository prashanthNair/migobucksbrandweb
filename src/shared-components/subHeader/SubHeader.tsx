import React from 'react';

import style from './SubHeader.module.scss';

function subHeader(props: any) {
    return (
        <div className={style["head-list"]}>
           <ul>
               <li>Products</li>
               <li>Stories</li>
               <li>Orderes</li>
               <li>settlements</li>
           </ul>
        </div>
    )
}

export default subHeader;
