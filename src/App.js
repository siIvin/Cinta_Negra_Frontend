import React, {Fragment} from 'react';

//Components
import {Navigation} from './components'

//import {Container} from 'reactstrap'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Routes from './Routes';
    


function App() {
  return (
    <Fragment>
      <Router>
        <Navigation/>
        <Switch>
          {Routes}
        </Switch>
      </Router>
    </Fragment>
  );
}


export default App;

