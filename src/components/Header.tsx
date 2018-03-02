import * as React from "react";
import {
  Navbar,
  Nav,
  NavItem
  //   FormGroup,
  //   FormControl,
  //   Button
} from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/home">L</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
                <NavItem href="#/list">时事</NavItem>
                <NavItem href="#">娱乐</NavItem>
                <NavItem href="#">小道消息</NavItem>
                <NavItem href="#">正经消息</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem href="#">注册</NavItem>
              <NavItem href="#">登录</NavItem>
              <NavItem href="#">个人中心</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
