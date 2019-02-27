import React, { Component } from "react";
import PostModal from "./components/PostModal";
import RVList from "./components/RVList";

import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'

    class App extends Component {
      render() {
        return (
          <Router>
          <Switch>
            <Route exact path="/" component={PostModal} />
            <Route exact path="/rvs" component={RVList} />
          </Switch>
        </Router>
                  )
      }
    }
    export default App;