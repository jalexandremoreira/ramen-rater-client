import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Div } from 'atomize';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { AddRamen } from './pages/AddRamen';
import { Home } from './pages/Home';
import { RamenDetails } from './pages/RamenDetails';
import { Navbar } from './components/Navbar';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Div m="auto" p={{ l: '10%', r: '10%' }} maxW="1920px">
          <Switch>
            <Route path="/ramen/:slug" component={RamenDetails} />
            <Route path="/ramen/add" component={AddRamen} />
            <Route path="/home" component={Home} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </Div>
      </Router>
    </ApolloProvider>
  );
}
