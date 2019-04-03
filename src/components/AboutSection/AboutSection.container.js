import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { showabout } from "../../actions/Actions";
import { connect } from "react-redux";
import profilepicture from "../../images/profile picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SectionWrapper = styled.section`
  position: relative;
  height: 100vh;
  background: #fefae0;
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
    top: ${props => (props.show ? "70px" : "50vh")};
    font-size: 30px;
    width: 185px;
    :hover {
      color: #002642;
      width: 200px;
    }
  }
`;

const HiddenProfile = styled.div`
  position: absolute;
  height: 65vh;
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (orientation: portrait) and (max-width: 1000px) {
    top: 120px;
  }

  @media (orientation: landscape) {
    justify-content: space-around;
    flex-direction: row;
  }

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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-basis: 50%;
  padding: 0px 20px;
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
  font-size: 18px;
  transition: 1.5s;
  transition-delay: 3s;
  opacity: ${props => (props.show ? "1" : "0")};
`;

const IntroThree = styled.div`
  padding: 5px;
  font-size: 15px;
  transition: 1.5s;
  transition-delay: 3.7s;
  opacity: ${props => (props.show ? "1" : "0")};
`;

const bouncy = keyframes`
0%,
20%,
50%,
80%,
100% {
  transform: translateY(0);
}
40% {
  transform: translateY(-15px);
}
60% {
  transform: translateY(-5px);
}
`;

const DownArrow = styled(FontAwesomeIcon)`
  position: absolute;
  bottom: 5px;
  font-size: 20px;
  color: #606c38;
  transition: 1.5s;
  transition-delay: 4s;

  animation: ${bouncy} 2s linear infinite;

  opacity: ${props => (props.show ? "1" : "0")};
`;

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
              Self-taught, motivated, and dedicated to improving my skillset.
            </IntroTwo>
            <IntroThree show={this.props.show}>
              Relocated to London and open to all opportunities.
            </IntroThree>
          </IntroWrapper>
        </HiddenProfile>
        <Greeting onClick={() => this.props.showabout()} show={this.props.show}>
          Hi, I'm Matt.
        </Greeting>
        <DownArrow icon={faChevronDown} show={this.props.show} />
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
