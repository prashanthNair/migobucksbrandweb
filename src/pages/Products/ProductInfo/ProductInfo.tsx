import React from 'react';
import Input from '../../../components/Input/Input';
import Select from '../../../components/Select/Select';


import style from './ProductInfo.module.scss';

function ProductInfo() {
  return (
    <div className={style["product-info"]}>
      <label>
        <Select containerStyle="product-info-container" label="Product Type" className="product-dropdown" id="pType" placeholder="" />
      </label>
      <label>
        <Select containerStyle="product-info-container" label="Available In Type" className="product-dropdown" id="pAvailable" placeholder="" />
      </label>
      <label>
        <label className={style['add-link']}>+ Add link</label>
      </label>
      <label>
        <Input containerStyle="product-info-container" label="Product Name" className="product-search" id="pName" placeholder="" />
      </label>
      <label>
        <Select containerStyle="product-info-container" label="Category" className="product-dropdown" id="pCategory" placeholder="" />
      </label>
    </div>
  );
}

export default ProductInfo;
