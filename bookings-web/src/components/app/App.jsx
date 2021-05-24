import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Getaways from '../../containers/Getaways';
import GetawaysDetails from '../../containers/GetawaysDetails';
import Login from '../auth/Login';
import Register from '../auth/Register';


export default function App() {
  const isAuthed = false;

  function AuthRoute({authStatus, component: Component, path}) {
    if (!authStatus){
      return <Redirect to="/login"/>
    }
    return (
      <Route path={path}>
        <Component />
      </Route>
    )
  }

  function Locked() {
    return <h1>LOCKED PAGE</h1>
  }

  return (
    <Router>
      <Switch>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
        <Route exact path='/getaways' component={Getaways}/>
        <Route path='/getaways/:id' component={GetawaysDetails}/>
        <Route path='/test' component={Locked}/>
        <AuthRoute path='/testauth' component={Locked} authStatus={isAuthed}/>
      </Switch>
    </Router>
  );
}
