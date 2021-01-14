import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import PageDefault from '../pages/Default';
import PageLogin from '../pages/Login';
import PageSignUp from '../pages/SignUp';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PageDefault} exact />
        <Route path="/login" component={PageLogin} />
        <Route path="/signup" component={PageSignUp} />
      </Switch>
    </BrowserRouter>
  );
}
