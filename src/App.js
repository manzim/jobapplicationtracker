import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Lists from './ListPage/Lists';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={LandingPage} />
        <Route path="/list" exact={true} component={Lists} />
      </Switch>
    </div>
  );
}

export default App;
