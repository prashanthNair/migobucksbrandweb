import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route, Switch
} from "react-router-dom";
import AppRouting from './App.routing';
import './App.scss';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to="/auth"></Redirect>
        </Route>
        {AppRouting.map((entry) => { return (<Route {...entry} />) })}
      </Switch>
    </Router>
  );
}

export default App;
