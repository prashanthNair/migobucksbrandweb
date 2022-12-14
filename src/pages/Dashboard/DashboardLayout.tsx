import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../../components/Header';
import Sidebar, { IBrandInfo } from '../../components/Dashboard/Sidebar';
import styles from './Dashboard.module.scss'
import DashboardRouting, { IDashboardRouting } from './Dashboard.Routing';

const brandInfo: IBrandInfo = {
  name: "Ashirvad",
  category: "Food Product",
}

const DashboardLayout: React.FC = () =>  {
  return (
    <div className={styles["page-layout"]}>
      <Header />
      <div className={styles["page-container"]}>
        <div className={styles['sidebar-container']}>
          <Sidebar brandInfo={brandInfo} />
        </div>
        <div className={styles['main-content-container']}>
          <Switch>
            { DashboardRouting.map((props: IDashboardRouting) => <Route {...props} />) }
          </Switch> 
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
