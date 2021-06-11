import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'; 
import Header from '../../shared-components/header/header';
 
import style from '../Auth/Auth.module.scss' 
import AuthRouting from './Auth.routing';

function Auth() {
  return (
    <div>
      <Header layout="auth" />
      <div className={style["page-container"]}>
          <Switch>
            <Route exact path="/auth/">
              <Redirect to="/auth/register" />
            </Route>
            {AuthRouting.map((entry:any) => {
              return <Route {...entry} />;
            })}
          </Switch>
      </div>
          
    </div>
  );
}

export default Auth;
