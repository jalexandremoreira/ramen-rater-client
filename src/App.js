import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import { Div } from 'atomize';

import { Home } from './screens/Home';
import { Navbar } from './components/Navbar';

export function App() {
  return (
    <>
      <Navbar />
      <Div m={{ l: '10%', r: '10%' }}>
        <Router>
          <Switch>
            {/* <Route path="/about" component={RandomRamen} /> */}

            <Route path="/home" component={Home} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </Router>
      </Div>
    </>
  );
}
