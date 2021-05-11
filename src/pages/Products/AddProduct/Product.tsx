import React from 'react';
import Button from '../../../components/Button/Button';
  
// import style from '../../containers/ContainerStyles.module.scss' 
import style from '../ProductContainer.module.scss'
import ProductFeature from '../ProductFeature/ProductFeature';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductMedia from '../ProductMedia/ProductMedia';
import ProductPlan from '../ProductPlan/ProductPlan';

function AddProduct() {
    return (
        <div className={style['product-layout']}>
            <div className={style['product-head']}>
                <div className={style['heading']}>Add a New Product</div>
            </div>
            <div>
                <ProductInfo />
            </div>
            <div>
                <ProductPlan />
            </div>
            <div>
                <ProductFeature />
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
