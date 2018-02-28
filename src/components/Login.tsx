import * as React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <form action="" className="form-horizontal">
          <div className="form-group">
            <label htmlFor="userName" className="col-sm-2 control-label">
              用户名
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                id="userName"
                placeholder="用户名"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="col-sm-2 control-label">
              密码
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                id="password"
                placeholder="密码"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <div className="checkbox">
                <label>
                  <input type="checkbox" />记住我
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-default">登录</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
