import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { showAbout, menuBurgerClicked } from "../../actions/actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFreeCodeCamp,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Item = styled.a`
  cursor: pointer;
  margin: 4px; 5px;
  text-decoration:none;
  color:black;
  :hover {
    color: #283618;
  }

  @media (min-width: 700px) {
    margin: 0 8px;
  }
`;

const fadein = keyframes`
from { 
  opacity: 0; 
}
to { 
  opacity: 1; 
}
`;

const fadeout = keyframes`
from { 
  opacity: 1; 
}
to { 
  opacity: 0;
}
`;

const ItemWrapper = styled.div`
  display: ${props => (props.menuopen ? "flex" : "none")};
  flex-direction: column;
  font-size: 20px;
  @media (max-width: 699px) {
    animation: ${props => (props.menuopen ? fadein : fadeout)} 1s;
  }
  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    font-size: 20px;
  }
`;

const Nav = styled.nav`
  position: fixed;
  background: #606c38;
  width: 100%;
  z-index: 9999;

  display: flex;
  justify-content: space-between;

  transition: height 0.2s;

  box-shadow: 1px 1px 5px;

  height: ${props => (props.menuopen ? "150px" : "40px")};

  @media (min-width: 700px) {
    height: 50px;
  }
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

//apparent transition effect issue on mobile chrome versions
const Line = styled.div`
  width: 25px;
  height: 3px;
  margin: 5px 0;
  transition: 0.3s linear;
  -webkit-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
  -o-transition: 0.3s linear;

  background-color: ${props => (props.menuopen ? "black" : "black")};
`;

//transforms 45 degree
const LineOne = styled(Line)`
  transform: ${props =>
    props.menuopen
      ? "rotate(45deg) translate(4px, 7px)"
      : "rotate(0deg) translate(0px, 0px)"};

  -webkit-transform: ${props =>
    props.menuopen
      ? "rotate(45deg) translate(4px, 7px)"
      : "rotate(0deg) translate(0px, 0px)"};
`;

//line 2 width decreases until it is the centre point
//or cool rotation effect
const LineTwo = styled(Line)`
  transform: ${props =>
    props.menuopen
      ? "rotate(180deg) translate(2px, -15px)"
      : "rotate(0deg) translate(0px, 0px)"};

  -webkit-transform: ${props =>
    props.menuopen
      ? "rotate(180deg) translate(2px, -15px)"
      : "rotate(0deg) translate(0px, 0px)"};
`;

//transforms 45 degree
const LineThree = styled(Line)`
  transform: ${props =>
    props.menuopen
      ? "rotate(-45deg) translate(4px, -7.5px)"
      : "rotate(0deg) translate(0px, 0px)"};

  -webkit-transform: ${props =>
    props.menuopen
      ? "rotate(-45deg) translate(4px, -7.5px)"
      : "rotate(0deg) translate(0px, 0px)"};
`;

const MenuWrapper = styled.div`
  @media (min-width: 700px) {
    align-self: center;
    display: flex;
    flex-direction: row;
    margin-left: 10px;
  }
`;

const IconWrapper = styled.div`
  align-self: flex-start;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  width: 100px;

  @media (min-width: 700px) {
    flex-direction: row;
    margin-right: 20px;
    align-self: center;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;

  :hover {
    color: #283618;
  }

  @media (min-width: 700px) {
    font-size: 28px;
    margin: 0px 10px;
  }
`;

class Header extends Component {
  render() {
    return (
      <Nav menuopen={this.props.menuopen}>
        <MenuWrapper>
          <MenuBurgerWrapper onClick={this.props.menuBurgerClicked}>
            <LineOne menuopen={this.props.menuopen} />
            <LineTwo menuopen={this.props.menuopen} />
            <LineThree menuopen={this.props.menuopen} />
          </MenuBurgerWrapper>
          <ItemWrapper menuopen={this.props.menuopen}>
            <Item onClick={this.props.showAbout} href="#aboutsection">
              About Me
            </Item>
            <Item href="#summarysection">Summary</Item>
            <Item href="#projectsection">Projects</Item>
          </ItemWrapper>
        </MenuWrapper>
        <IconWrapper>
          <Icon
            onClick={() => window.open("https://github.com/matthewmcintyre/")}
            icon={faGithub}
            size="lg"
          />
          <Icon
            onClick={() =>
              window.open("https://www.freecodecamp.org/matthewmcintyre")
            }
            icon={faFreeCodeCamp}
            size="lg"
          />
          <Icon
            onClick={() =>
              window.open("https://www.linkedin.com/in/matthew-mcintyre/")
            }
            icon={faLinkedin}
            size="lg"
          />
        </IconWrapper>
      </Nav>
    );
  }
}

const mapStateToProps = state => ({
  menuopen: state.headerHandler.menuopen
});

const myActions = { showAbout, menuBurgerClicked };

export default connect(
  mapStateToProps,
  myActions
)(Header);
