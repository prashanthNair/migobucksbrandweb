import React from 'react';

import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import AppRouting from '../app.routing';
import AddProduct from '../pages/Products/AddProduct/Product';
import Header from '../shared-components/header/header';
import SubHeader from '../shared-components/subHeader/SubHeader';
 
import style from './ContainerStyles.module.scss'; 

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
            {AppRouting.map((entry) => {
              return <Route {...entry} />;
            })}
          </Switch>
        </div>
        <div className={style["right-sidebar"]}></div>
      </div>
    </div>
  );
}

export default Layout;
