import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'; 
import Header from '../../shared-components/header/header';
 
import style from './auth.module.scss'; 
import AuthRouting from './auth.routing';

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
