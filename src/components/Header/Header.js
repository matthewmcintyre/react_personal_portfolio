import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFreeCodeCamp,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Item = styled.p`
  font-size: 20px;

  display: none;
  @media (min-width: 700px) {
    display: block;
  }
`;

const Nav = styled.nav`
  position: fixed;
  background: #606c38;
  width: 100%;
  z-index: 9999;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const MenuBurgerWrapper = styled.div`
  display: inline-block;
  padding: 5px;
  margin-left: 10px;
  align-self: flex-start;

  @media (min-width: 700px) {
    display: none;
  }
`;

const Line = styled.div`
  width: 25px;
  height: 3.5px;
  background-color: black;
  margin: 4.5px 0;
  transition: 0.4s;

  :hover {
    background-color: red;
  }
`;

const LineOne = styled(Line)``;

const LineTwo = styled(Line)``;

const LineThree = styled(Line)``;

const MenuWrapper = styled.div`
  @media (min-width: 700px) {
    align-self: center;
    display: flex;
    flex-direction: row;
  }
`;

const IconWrapper = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-around;
  width: 100px;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

class Header extends Component {
  render() {
    return (
      <Nav>
        <MenuWrapper>
          <MenuBurgerWrapper>
            <LineOne />
            <LineTwo />
            <LineThree />
          </MenuBurgerWrapper>
          <Item>About Me</Item>
          <Item>Summary</Item>
          <Item>Projects</Item>
        </MenuWrapper>
        <IconWrapper>
          <FontAwesomeIcon icon={faGithub} size="lg" />
          <FontAwesomeIcon icon={faFreeCodeCamp} size="lg" />
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </IconWrapper>
      </Nav>
    );
  }
}

export default Header;
