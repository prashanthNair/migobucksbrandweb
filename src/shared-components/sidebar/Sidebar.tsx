import React from 'react';

function Sidebar(props: any) {
    return (
        <input className={props.className} onClick={props.onClick} type={props.type} placeholder={props.label}/>
    )
}

export default Sidebar;