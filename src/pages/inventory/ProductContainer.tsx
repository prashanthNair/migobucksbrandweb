import React from 'react';

import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Header from '../../shared-components/Header';
import SubHeader from '../../shared-components/subHeader/SubHeader';
import style from './ProductContainer.module.scss'
import ProductRouting, { IProductRouting } from './Product.Routing';

function ProductContainer() {
  return (
    <div className={style["page-layout"]}>
      <Header />
      <div className={style["page-container"]}>
        <div className={style["sidebar"]}></div>
        <div className={style["dynamic-wrap"]}>
          <SubHeader />
          <Switch>
            <Route exact path='/products/list'>
              <Redirect to='/products/list'></Redirect>
            </Route>
            { ProductRouting.map((props: IProductRouting) => <Route {...props} />) }
          </Switch> 
        </div>
        <div className={style["right-sidebar"]}></div>
      </div>
    </div>
  );
}

export default ProductContainer;
