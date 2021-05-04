import React from 'react';

import Button from '../../../../../components/Button/Button';
import Input from '../../../../../components/Input/Input';
import RadioList from '../../../../../components/RadioList/RadioList';
import Select from '../../../../../components/Select/Select';
import style from './ProductPlan.module.scss';

function ProductPlan() {
  const options = [
    {
      label: "Paid",
      id: "paidOpt",
      changed: false,
      value: 1,
      isSelected: false,
    },
    {
      label: "Free",
      id: "freeOpt",
      changed: false,
      value: 2,
      isSelected: false,
    },
  ];
  return (
    <div className={style["product-plan"]}>
      <RadioList radioOptions={options} containerClass="plan-list" />
      <label>
        <label className={style["add-plan"]}>+ Add a Plan</label>
      </label>
      <label>
        <Input
          label="Plan Name"
          containerStyle="product-plan-container"
          className="product-search"
          id="planName"
          placeholder=""
        />
      </label>
      <label>
        <Select
          label="Plan"
          containerStyle="product-plan-container"
          className="product-dropdown"
          id="plan"
          placeholder=""
        />
      </label>
      <label>
        <Input
        containerStyle="product-plan-container"
          label="Amount"
          className="product-search"
          id="amount"
          placeholder=""
        />
      </label>
      <label className={style['button-label']}>
          <Button label="Add Plan" className="plan-button" />
      </label>
    </div>
  );
}

export default ProductPlan;
