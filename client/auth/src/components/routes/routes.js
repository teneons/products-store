import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';

import Body from '../Body/Body';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';

export const routes = isAuth => {
  if(isAuth) {
    return(
      <Switch>
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/' component={Body} exact/>
      </Switch>
    )
  }

  return(
    <Switch>
      <Route path='/' component={Body} exact/>
      <Redirect to='/' />
    </Switch>
  )
}