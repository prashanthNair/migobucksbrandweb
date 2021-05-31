import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import AppRouting, { IAppRouting } from './App.routing';

const App = () => {
  return (
      <Switch>
        <Route exact path='/'>
          <Redirect to="/auth"></Redirect>
        </Route>
        { AppRouting.map((props: IAppRouting) => <Route {...props} />) }
      </Switch>
  );
}

export default App;
