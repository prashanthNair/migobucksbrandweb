import React from 'react';
import Button from '../../../components/Button/Button';
  
import style from '../ProductContainer.module.scss'  
import ProductMedia from '../ProductMedia/ProductMedia';
import ProductPlan from '../ProductKeyPoints/ProductKeyPoints';
import ProductHearder from '../ProductHearder/ProductHeader';

function AddProduct() {
    return (
        <div className={style['product-layout']}>
            <div className={style['product-head']}>
                <div className={style['heading']}>Add a New Product</div>
            </div>
            <div>
                <ProductHearder />
            </div>
            <div>
                <ProductPlan />
            </div>
            <div>
                
            </div>
            <div>
                <ProductMedia />
            </div>
            <div className={style['button-contain']}>
                <Button className="product-submit" label="Submit"/>
            </div>
        </div>
    )
}

export default AddProduct
