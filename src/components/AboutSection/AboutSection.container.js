import React, { Component } from "react";
import styled from "styled-components";
import { showabout } from "../../actions/Actions";
import { connect } from "react-redux";
import profilepicture from "../../images/profile picture.png";

const SectionWrapper = styled.section`
  height: 100vh;
  background: ${props => (props.show ? "#D7BE82" : "#fefae0")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background 2s ease-out 0.7s;
`;

const Greeting = styled.h1`
  position: absolute;
  cursor: pointer;
  border-bottom: solid #606c38 5px;

  transition: top 2s, width 0.5s;
  border-bottom: solid #606c38 5px;
  top: ${props => (props.show ? "55px" : "50vh")};
  font-size: 25px;
  text-align: center;

  @media (min-width: 700px) {
    font-size: 30px;
    width: 185px;
    :hover {
      color: #002642;
      width: 200px;
    }
  }
`;

const HiddenProfile = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 700px) {
    justify-content: space-around;
    flex-direction: row;
  }
`;

const ImgWrapper = styled.div`
  flex-basis: 50%;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const ProfileImg = styled.img`
  width: 80%;
  display: block;
  align-self: center;
  border: 1px solid black;

  transition: 1s;
  transition-delay: 1.3s;
  opacity: ${props => (props.show ? "1" : "0")};

  @media (min-width: 700px) {
    width: 70%;
  }
`;

const IntroWrapper = styled.div`
  flex-basis: 50%;
  padding: 20px;
`;

const IntroOne = styled.div`
  padding: 5px;
  font-size: 20px;
  transition: 1.5s;
  transition-delay: 2.3s;
  opacity: ${props => (props.show ? "1" : "0")};
`;

const IntroTwo = styled.div`
  padding: 5px;
  font-size: 15px;
  transition: 1.5s;
  transition-delay: 3s;
  opacity: ${props => (props.show ? "1" : "0")};
`;

const IntroThree = styled.div`
  padding: 5px;
  font-size: 10px;
  transition: 1.5s;
  transition-delay: 3.7s;
  opacity: ${props => (props.show ? "1" : "0")};
`;

const downArrow = styled.div``;

class AboutSection extends Component {
  render() {
    return (
      <SectionWrapper show={this.props.show} id="aboutsection">
        <HiddenProfile>
          <ImgWrapper>
            <ProfileImg
              show={this.props.show}
              alt="profile"
              src={profilepicture}
            />
          </ImgWrapper>
          <IntroWrapper>
            <IntroOne show={this.props.show}>
              An aspiring Web Developer from New Zealand.
            </IntroOne>
            <IntroTwo show={this.props.show}>
              I love building functional, responsive and beautiful websites and
              am dedicated to improving my skillset.
            </IntroTwo>
            <IntroThree show={this.props.show}>please hire me</IntroThree>
          </IntroWrapper>
        </HiddenProfile>
        <Greeting onClick={() => this.props.showabout()} show={this.props.show}>
          Hi, I'm Matt.
        </Greeting>
      </SectionWrapper>
    );
  }
}

const mapStateToProps = state => ({
  show: state.displayAboutMe.show
});

const myActions = { showabout };

export default connect(
  mapStateToProps,
  myActions
)(AboutSection);
