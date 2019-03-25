import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { dosomething, showthething } from "../../actions/Actions";
import { connect } from "react-redux";
import profilepicture from "../../images/profile picture.png";

const rotated = { transform: "rotateY(180deg)" };
const notrotated = { transform: "rotateY(0deg)" };

/*const randomThing = keyframes`
  from {
    border-bottom: solid #606c38 1px;
  }

  to {
    border-bottom: solid #606c38 5px;
  }
`;

   animation: ${randomThing} 1s linear infinite;
*/

const SectionWrapper = styled.section`
  height: 100vh;
  background: ${props => (props.show ? "#D7BE82" : "#fefae0")};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background 2s ease-out 0.7s, transform 2s;
  ${props => (props.show ? notrotated : rotated)};
`;

const Greeting = styled.h1`
  position: absolute;
  cursor: pointer;
  border-bottom: solid #606c38 5px;
  transition: 2s;
  border-bottom: solid #606c38 5px;

  ${props => (props.show ? notrotated : rotated)};
  top: ${props => (props.show ? "55px" : "50vh")};

  :hover {
    color: #002642;
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
  font-size: 20px;
  transition: 1.5s;
  transition-delay: 2.3s;
  opacity: ${props => (props.show ? "1" : "0")};
`;

const IntroTwo = styled.div`
  font-size: 15px;
  transition: 1.5s;
  transition-delay: 3s;
  opacity: ${props => (props.show ? "1" : "0")};
`;

const IntroThree = styled.div`
  font-size: 10px;
  transition: 1.5s;
  transition-delay: 3.7s;
  opacity: ${props => (props.show ? "1" : "0")};
`;

class AboutSection extends Component {
  render() {
    return (
      <SectionWrapper show={this.props.show}>
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
            <IntroTwo show={this.props.show}>I want job</IntroTwo>
            <IntroThree show={this.props.show}>please hire me</IntroThree>
          </IntroWrapper>
        </HiddenProfile>
        <Greeting
          onClick={() => this.props.showthething()}
          show={this.props.show}
        >
          Hi, I'm Matt.
        </Greeting>
      </SectionWrapper>
    );
  }
}

const mapStateToProps = state => ({
  show: state.displayAboutMe.show
});

const myActions = { dosomething, showthething };

export default connect(
  mapStateToProps,
  myActions
)(AboutSection);
