import * as React from "react";
import './../less/login.less'
// import createBrowserHistory from "history/createBrowserHistory";
// const history = createBrowserHistory();

class Login extends React.Component {

  state = {
    login: localStorage.getItem('login')
  }

  login = () => {
    // this.props.history.push()
      localStorage.setItem('login','true');
      // history.push('/');
      
  }


  render():any {
    return (
      <div className="container login-container">
        <form action="" className="form-horizontal"> 
          <div className="form-group">
            <label htmlFor="userName" className="col-sm-4 control-label">
              用户名
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                id="userName"
                placeholder="用户名"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="col-sm-4 control-label">
              密码
            </label>
            <div className="col-sm-6">
              <input
                type="password"
                id="password"
                placeholder="密码"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-4 col-sm-10">
              <div className="checkbox">
                <label>
                  <input type="checkbox" />记住我
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-4 col-sm-10">
              <button className="btn btn-default" onClick={this.login}>登录</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
