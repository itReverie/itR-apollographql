import React from 'react'
import ReactDOM from 'react-dom'
import Pokedex from './components/Pokedex'
import { Router, Route, browserHistory } from 'react-router'
import 'tachyons'
import './index.css'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

//connect Apollo Client with our GraphQL server by configuring the network layer
const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/__PROJECT_ID__'}),
})


ReactDOM.render((
  <ApolloProvider client={client}>
  <Router history={browserHistory}>
    <Route path='/' component={Pokedex} />
  </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
)
