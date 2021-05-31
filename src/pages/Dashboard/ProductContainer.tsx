import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import Header from '../../shared-components/Header';
import Sidebar, { IBrandInfo } from '../../components/Dashboard/Sidebar';
import styles from './ProductContainer.module.scss'
import ProductRouting, { IProductRouting } from './Product.Routing';

const brandInfo: IBrandInfo = {
  name: "Ashirvad",
  category: "Food Product",
}

function ProductContainer() {
  return (
    <div className={styles["page-layout"]}>
      <Header />
      <div className={styles["page-container"]}>
        <div className={styles['sidebar-container']}>
          <Sidebar brandInfo={brandInfo} />
        </div>
        <div className={styles['main-content-container']}>
          <Switch>
            { ProductRouting.map((props: IProductRouting) => <Route {...props} />) }
          </Switch> 
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
