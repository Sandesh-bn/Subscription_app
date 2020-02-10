import React, { Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ConfigPage from './containers/ConfigPage'
import DonePage from './containers/DonePage'

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={ConfigPage}/>
          <Route exact path="/config" component={ConfigPage}/>
          <Route exact path="/done" component={DonePage}/>
          <Route render={() => {
            return (
              <Redirect to="/"/>
            )
          }}/>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
