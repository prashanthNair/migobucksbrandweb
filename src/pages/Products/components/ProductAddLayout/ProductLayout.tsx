import React from 'react';

import Button from '../../../../components/Button/Button';
import ProductFeature from './ProductFeature/ProductFeature';
import ProductInfo from './ProductInfo/ProductInfo';
import style from './ProductLayout.module.scss';
import ProductMedia from './ProductMedia/ProductMedia';
import ProductPlan from './ProductPlan/ProductPlan';

function ProductAddLayout() {
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

export default ProductAddLayout
