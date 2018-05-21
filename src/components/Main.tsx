import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import Login from "./Login";
import Home from "./Home";
import List from "./List";
import Detail from "./Detail";

class Main extends React.Component<any, any>{
    render():any{
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route path="/login" component={Login} /> */}
                {/* <Route path={this.props.match.path} component={Login} /> */}
                <Route path="/home" component={Home} />
                <Route path="/list" component={List} />
                <Route path="/detail/:id" component={Detail} />
                <Redirect to="/" />
            </Switch>
        )
    }
}

export default Main;