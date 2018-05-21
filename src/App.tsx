import * as React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Main from "./components/Main";
import {  Switch, Route, Redirect } from "react-router";
import Login from "./components/Login";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    // localStorage.setItem("login", 'false');
    this.state = {
      login: localStorage.getItem("login")
    };
  }

  componentDidMount(){
    this.setState({
      login: localStorage.getItem("login")
    });
  }

  render() {
      return (
        JSON.parse(this.state.login) ?
          <div>
            <Header />
            <Main />
            {JSON.parse(this.state.login)}
          </div>
         : <div>
           <Switch>
             <Route path="/login" component={Login}></Route>
             <Redirect to="/login" />
           </Switch>
         </div>
      );
    
  }
}

export default App;
