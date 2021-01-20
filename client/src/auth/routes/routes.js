import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';

import WelcomePage from '../WelcomePage/WelcomePage';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Products from '../../products/App/App';

export const routes = isAuth => {
  if(isAuth) {
    return(
      <Switch>
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/' component={WelcomePage} exact/>
        <Route path='/products' component={Products} />
      </Switch>
    )
  }

  return(
    <Switch>
      <Route path='/' component={WelcomePage} exact/>
      <Redirect to='/' />
    </Switch>
  )
}