import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Ceremony from './components/pages/Ceremony';
import Gifting from './components/pages/Gifting';
import Lodging from './components/pages/Lodging';
import Schedule from './components/pages/Schedule';
import Contact from './components/pages/Contact';


const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (

    <ApolloProvider client={client} >
            <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/ceremony' component={Ceremony} />
          <Route path='/lodging' component={Lodging} />
          <Route path='/gifting' component={Gifting} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;