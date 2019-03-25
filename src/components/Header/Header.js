import React, { Component } from "react";
import styled from "styled-components";

const Item = styled.p`
  font-size: 20px;
`;

const Nav = styled.nav`
  position: fixed;
  background: #606c38;
  width: 100%;
  z-index: 9999;
`;

class Header extends Component {
  render() {
    return (
      <Nav>
        <Item>About Me</Item>
        <Item>Summary</Item>
        <Item>Projects</Item>
      </Nav>
    );
  }
}

export default Header;
