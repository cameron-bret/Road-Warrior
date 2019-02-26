import React, { Component } from "react";
import SinglePostModal from "./components/SinglePostModal";
import PostList from "./components/PostList";
import RVList from "./components/RVList";
import CommentList from "./components/CommentList";

import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'

    class App extends Component {
      render() {
        return (
          <Router>
          <Switch>
            <Route exact path="/" component={SinglePostModal} />
            <Route exact path="/posts" component={PostList}/>
            <Route exact path="/rvs" component={RVList}/>
            <Route exact path="/comments" component={CommentList}/>
          </Switch>
        </Router>
                  )
      }
    }
    export default App;