import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Dashborad from './components/dashborad/dashborad'
import Logout from './components/logout/logout'

import store from './store';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/dashborad" component={Dashborad} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/" exact component={Login} />
      </Switch>
    );
    return (
      <Provider store={store}>
        <div className="App">
         {routes}
          
        </div>
      </Provider>
    );
  }
}

export default App;
