import React from 'react';

import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Header from '../shared/Header/Header';
import SubHeader from '../shared/subHeader/SubHeader';
import style from './Layout.module.scss';
import LayoutRouting from './Layout.routing';

function Layout() {
  return (
    <div className={style["page-layout"]}>
      <Header  layout="common" />
      <div className={style["page-container"]}>
        <div className={style["sidebar"]}></div>
        <div className={style["dynamic-wrap"]}>
          <SubHeader />
          <Switch>
            <Route exact path="/layout">
              <Redirect to="/layout/products/list"></Redirect>
            </Route>
            {LayoutRouting.map((entry) => {
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
