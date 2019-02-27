import React, { Component } from "react";
import SinglePostModal from "./components/SinglePostModal";
import RVList from "./components/RVList";

import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'

    class App extends Component {
      render() {
        return (
          <Router>
          <Switch>
            <Route exact path="/" component={SinglePostModal} />
            <Route exact path="/rvs" component={RVList} />
          </Switch>
        </Router>
                  )
      }
    }
    export default App;