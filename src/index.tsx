import * as React from "react";
import * as ReactDOM from "react-dom";
// import registerServiceWorker from "./registerServiceWorker";
import "./less/index.less";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById("root") as HTMLElement
);
// registerServiceWorker();
