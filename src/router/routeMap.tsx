import { Route, Switch } from "react-router";
import * as React from "react";
import Login from "../components/Login";
import Home from "../components/Home";
import { HashRouter } from "react-router-dom";
import List from "../components/List";
import App from "../App";

class RouteMap extends React.Component {
  updateHandle() {
    console.log("router has changed");
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/list" component={List} />
        </Switch>
      </HashRouter>
    );
  }
}

export default RouteMap;
