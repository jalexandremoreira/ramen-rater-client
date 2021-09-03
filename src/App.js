import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Div } from 'atomize';

import { AddRamen } from './screens/AddRamen';
import { Home } from './screens/Home';
import { Navbar } from './components/Navbar';

export function App() {
  return (
    <Router>
      <Navbar />
      <Div m={{ l: '10%', r: '10%' }}>
        <Switch>
          <Route path="/add-ramen" component={AddRamen} />

          <Route path="/home" component={Home} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </Div>
    </Router>
  );
}
