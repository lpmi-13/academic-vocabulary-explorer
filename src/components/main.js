import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Search from './search';

const Main = () => (
  <main>
    <Switch>
      <Route path='/search' component={Search}/>
      <Route path='/' component={Home}/>
    </Switch>
  </main>
)

export default Main;
