import React from 'react';
import {Switch, HashRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Home} from './pages/home';
import {Config} from './pages/config';

export const App = () => (
  <div className="app">
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </HashRouter>
  </div>
)

