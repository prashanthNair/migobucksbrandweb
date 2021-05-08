import React, { useState } from "react";
import Input from "../../components/Input/Input";

import style from './myAccount.module.scss';
import Dropdown from "../../components/dropdown/dropdown";
import Button from "../../components/Button/Button";

import { useInput } from '../../pages/Account/useInput'


function MyAccount(){
    const { value:name, bind:bindName} = useInput('hello');
    const { bind:bindAvailableIn} = useInput('hello');
    const catagoryData=[{ value: 1, label: 'Health & Fitness' },{ value: 2, label: 'Entertainment' },{ value: 3, label: 'Gym' },{ value: 4, label: 'Educational' }]
    const availableData=[{ value: 1, label: 'iOS' },{ value: 2, label: 'Android' },{ value: 3, label: 'Microsoft Windows' }]
    const productData=[{ value: 1, label: 'Mobile App' },{ value: 2, label: 'Desktop App' }]
   
    //const [name, setProductName] = useState("");
    const handleSubmit = (event: { preventDefault: () => void; })=> {
         event.preventDefault();
        debugger
         alert(`The product name is ${name} `);
         
        console.log(name)
        
     }
    
    return(
    <form onSubmit={handleSubmit} >
    <div className={style["product-info"]}>
        <div className={style['form-container']}>
      <label>
      <Dropdown  label="Product Type" name="product-dropdown" id="type" options= {productData}/>
      </label>
      <label>
        <Dropdown label="Available In "  name="availableIn" {...bindAvailableIn} id="pAvailable" options= {availableData}  />
      </label>
      <label>
        <label className={style['add-link']}>+ Add link</label>
      </label>
      <label>
        <Input  label="Product Name" className="product-search" type="text"{...bindName} value={name}  id="pName" placeholder="" />
      
      </label>
      <label>
        <Dropdown  label="Category" name="product-dropdown"  id="pCategory" options= {catagoryData}   />
      </label>
      <Button className="product-submit" label="Submit" value="submit" />
      </div>
      </div>
      </form>
    )
    
}
export default MyAccount;