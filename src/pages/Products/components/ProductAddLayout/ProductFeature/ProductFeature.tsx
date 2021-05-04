import React from 'react';

import Input from '../../../../../components/Input/Input';
import Select from '../../../../../components/Select/Select';
import style from './ProductFeature.module.scss';

function ProductFeature() {
  return (
    <div className={style["product-feature"]}>
      <label>
        <label className={style["add-feature"]}>+ Add a Feature</label>
      </label>
      <label>
        <Input
          label="Feature Name"
          containerStyle="product-feature-container"
          className="product-search"
          id="planName"
          placeholder=""
        />
      </label>
      <label>
        <Select
          label="Select Plan"
          containerStyle="product-info-container"
          className="product-dropdown"
          id="plan"
          placeholder=""
        />
      </label>
      <label>
        <Input
          containerStyle="product-plan-container"
          label="Free Trial Period"
          className="product-search"
          id="trial"
          placeholder=""
        />
      </label>
      <label className={style['trial-label']}>Days</label>
    </div>
  );
}

export default ProductFeature;
