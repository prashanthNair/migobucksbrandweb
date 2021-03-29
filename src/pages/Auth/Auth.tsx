import React from 'react';

import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import AuthRouting from './Auth.routing';

function Auth() {
    return (
        <div>
            <Switch>
                <Route exact path="/auth/">
                    <Redirect to="/auth/login" />
                </Route>
                {AuthRouting.map((entry) => { return (<Route {...entry} />) })}
            </Switch>
        </div>
    )
}

export default Auth
