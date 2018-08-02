import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/common/PrivateRoute";
import Landing from "./components/layout/Landing";
import Search from "./components/search/Search";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <switch>
            <Route path="/" exact component={Landing} />
            <Route path="/search" component={Search} />
          </switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
