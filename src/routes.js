import React from 'react'
import {Route, IndexRoute, Router} from 'react-router'
import Home from './containers/home'
import SearchWindow from './containers/search/searchCtnr'
import App from './App'

const Routes = () => (
  <Router>
    <Route path='/' component={App} >
      <IndexRoute component={Home} />
      <Route path='/search' component={SearchWindow} />
    </Route>
  </Router>
)

export default Routes
