import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./less/index.less";
import App from "./App";
import { HashRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

ReactDOM.render(
  <div>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </HashRouter>
  </div>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
