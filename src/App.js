import './bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Route, Switch , withRouter} from "react-router-dom";
import React, {Component, memo, useState , Fragment, Button} from 'react'
import Home from './components/Home'
import Estimate from './components/Estimate'
import Gallery from './components/Gallery'




class App extends Component {
  render() {
    return(
      <React.Fragment>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={withRouter(Home)} />
              <Route exact path="/estimate" component={withRouter(Estimate)} />
              <Route exact path="/gallery" component={withRouter(Gallery)} />
            </Switch>
          </Router>
      </React.Fragment>
    )
  }
}

export default App;