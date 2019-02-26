import React, { Component } from "react";
import SinglePostModal from "./components/SinglePostModal";

import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'

    class App extends Component {
      render() {
        return (
          <Router>
          <Switch>
            <Route exact path="/" component={SinglePostModal} />
          </Switch>
        </Router>
                  )
      }
    }
    export default App;