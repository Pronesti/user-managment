import React from 'react';
import {Route, Switch } from 'react-router-dom';

import Login from '../views/Login';
import Players from '../views/Players';
import Profile from '../views/Profile';
import Register from '../views/Register';
import Scoreboard from '../views/Scoreboard';
import Settings from '../views/Settings';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' />
      <Route path='/login' component={Login} />
      <Route path='/players' component={Players} />
      <Route path='/profile' component={Profile} />
      <Route path='/register' component={Register} />
      <Route path='/scoreboard' component={Scoreboard} />
      <Route path='/settings' component={Settings} />
    </Switch>
  );
}
