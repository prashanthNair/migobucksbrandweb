import React from 'react'
import style from './dropdown.module.scss';
interface Props {
    label: string,
    id: string,
    name: string,
    options: Array<any>,
    defaultOption?: string
}

function Dropdown(props: Props) {
    return (
        <div className={style['container']}>
            <label htmlFor={props.id}>{props.label}</label>
            <select name={props.name} id={props.id}>
                {
                    props.options.map((data, index) => <option key={index} value={data.value}>{data.label}</option>)
                }
            </select>
        </div>
    )
}

export default Dropdown
