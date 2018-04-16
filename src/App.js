import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as routes from './routes';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import SignOut from './containers/SignOut';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <Switch>
        <Route
          exact path={routes.SIGN_UP}
          component={() => <SignUp />}
        />
        <Route
          exact path={routes.SIGN_IN}
          component={() => <SignIn />}
        />
        <Route
          exact path={routes.SIGN_OUT}
          component={() => <SignOut />}
        />
        <Route
          exact path={routes.HOME}
          component={() => <Home />}
        />
        <Route
          exact path='/'
          component={() => <Home />}
        />
       </Switch>
      </div>
    );
  }
}

export default App;
