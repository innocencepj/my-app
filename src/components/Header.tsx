import * as React from "react";
import {
  Navbar,
  Nav,
  NavItem
} from "react-bootstrap";
import { Link} from "react-router-dom";
import * as PropTypes from 'prop-types';
// import createBrowserHistory from "history/createBrowserHistory";
// const history = createBrowserHistory();

class Header extends React.Component {

  constructor(props: any) {
    super(props);
    // localStorage.setItem("login", 'false');
  }

  // signOut= () => {
  //   console.log(this)
  //   localStorage.setItem('login', 'false');
  //   history.push({pathname:'/login'});
  // }

  // 这一步是重点
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  signOut(){
    console.log(this)
    localStorage.setItem('login', 'false');
    // history.push({pathname:'/login'});
    this.context.router.history.replace('/login');
    console.log(this)
  }

  render() {
    return (
      <div className="container">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/home">L</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
                <NavItem href="/">首页</NavItem>
                <NavItem href="/list">时事</NavItem>
                <NavItem href="/list">娱乐</NavItem>
                <NavItem href="/list">小道消息</NavItem>
                <NavItem href="/list">正经消息</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem href="/regist">注册</NavItem>
              <NavItem onClick={this.signOut.bind(this)}>退出</NavItem>
              <NavItem href="#">个人中心</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
