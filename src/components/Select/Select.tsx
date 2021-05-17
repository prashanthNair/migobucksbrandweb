import React from 'react';

import style from './Select.module.scss';

function Select(props: any) {
  function getOptions(){
    let data = props.options;
    // alert(JSON.stringify(data));
    return(data.map((item:any)=>{
      // alert(item.value);
      return <option value={item.value}>{item.name}</option>;
    }));
  }
  return (
    <label className={style[props.containerStyle]}>
      <label className={style["select-label"]}>{props.label}</label>
      <select
        className={style[props.className]}
        onClick={props.onClick}
        placeholder={props.label}>
        <option>Select Option</option>
        {getOptions()}
      </select>
    </label>
  );
}

export default Select;
