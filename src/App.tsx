import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/Route/Protected';
import AppRouting, { IAppRouting } from './App.routing';
import Loading from './components/Loading';

const App: React.FC = () => {
  return (
      <Switch>
        <Loading>
        <Route exact path='/'>
          <Redirect to="/auth"></Redirect>
        </Route>
        { AppRouting.map((props: IAppRouting) => ( props.protected ? <ProtectedRoute {...props} fallbackRedirect="/" /> : <Route {...props} />)) }
        </Loading>
      </Switch>
  );
}

export default App;
