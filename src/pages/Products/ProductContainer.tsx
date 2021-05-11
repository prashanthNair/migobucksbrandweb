import React from 'react';

import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Header from '../../shared-components/header/header';
import SubHeader from '../../shared-components/subHeader/SubHeader';  
import style from './ProductContainer.module.scss'
import ProductRouting from './Product.Routing';
import ProductList from './ProductList/ProductList';

function Layout() {
  return (
    <div className={style["page-layout"]}>
      <Header  layout="common" />
      <div className={style["page-container"]}>
        <div className={style["sidebar"]}></div>
        <div className={style["dynamic-wrap"]}>
          <SubHeader />
          <Switch>
            <Route exact path="/products">
              <Redirect to="/products"></Redirect>
            </Route>
            {ProductRouting.map((entry) => {
              return <Route {...entry} />;
            })}
          </Switch>
          <ProductList></ProductList>
        </div>
        <div className={style["right-sidebar"]}></div>
      </div>
    </div>
  );
}

export default Layout;
