import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/Route/Protected';
import AppRouting, { IAppRouting } from './App.routing';

const App: React.FC = () => {
  return (
      <Switch>
        <Route exact path='/'>
          <Redirect to="/auth"></Redirect>
        </Route>
        { AppRouting.map((props: IAppRouting) => ( props.protected ? <ProtectedRoute {...props} fallbackRedirect="/" /> : <Route {...props} />)) }
      </Switch>
  );
}

export default App;
