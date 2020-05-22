import React, { Fragment } from 'react';

//Components
import { Navigation, Footer } from './components'

//import {Container} from 'reactstrap'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Routes from './Routes';

import AuthContextProvider from './context/AuthContext'


function App() {
  return (
    <Fragment>
      <Router>
        <AuthContextProvider>

          <Navigation />
          <Switch>
            {Routes}
          </Switch>
          <Footer />
        </AuthContextProvider>
      </Router>
    </Fragment>
  );
}


export default App;

