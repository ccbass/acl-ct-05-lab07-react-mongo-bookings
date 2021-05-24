import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Getaways from '../../containers/Getaways';
import GetawaysDetails from '../../containers/GetawaysDetails';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Getaways}/>
        <Route path='/:id' component={GetawaysDetails}/>
      </Switch>
    </Router>
  );
}
