import React from 'react';

import style from './Button.module.scss';

function Button(props: any) {
    return (
        <button className={style[props.className]} onClick={props.onClick} type={props.type}>{props.label}</button>
    )
}

export default Button;
