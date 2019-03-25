import React, { Component } from "react";
import styled from "styled-components";
import { dosomething, showthething } from "../../actions/Actions";
import { connect } from "react-redux";
import profilepicture from "../../images/profile picture.png";

const rotated = { transform: "rotateY(180deg)" };
const notrotated = { transform: "rotateY(0deg)" };

const SectionWrapper = styled.section`
  height: 100vh;
  background: ${props => (props.show ? "#550c18" : "#fefae0")};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background 2s ease-out 1s, transform 2s;
  ${props => (props.show ? notrotated : rotated)};
`;

const Intro = styled.h1`
  position: absolute;
  cursor: pointer;

  transition: 2s;
  border-bottom: solid #606c38 5px;

  ${props => (props.show ? notrotated : rotated)};
  top: ${props => (props.show ? "80px" : "50vh")};

  :hover {
    color: #550c18;
  }
`;

const HiddenProfile = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 700px) {
    justify-content: space-around;
    flex-direction: row;
  }
`;

const ImgWrapper = styled.div`
  width: 80%;
  align-self: center;
  flex-basis: 50%;
  padding: 20px;
`;

const ProfileImg = styled.img`
  width: 100%;
  display: block;
  border: 1px solid black;
  margin-bottom: 10px;
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
  transition: 1s;
  transition-delay: 2.3s;
  opacity: ${props => (props.show ? "1" : "0")};
`;

const IntroTwo = styled.div`
  font-size: 15px;
  transition: 1s;
  transition-delay: 2.3s;
  opacity: ${props => (props.show ? "1" : "0")};
`;

const IntroThree = styled.div`
  font-size: 10px;
  transition: 1s;
  transition-delay: 2.3s;
  opacity: ${props => (props.show ? "1" : "0")};
`;

class FirstSection extends Component {
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
              I am an aspiring Web Developer from New Zealand
            </IntroOne>
            <IntroTwo show={this.props.show}>
              I am an aspiring Web Developer from New Zealand
            </IntroTwo>
            <IntroThree show={this.props.show}>
              I am an aspiring Web Developer from New Zealand
            </IntroThree>
          </IntroWrapper>
        </HiddenProfile>
        <Intro onClick={() => this.props.showthething()} show={this.props.show}>
          Hi, I'm Matt.
        </Intro>
      </SectionWrapper>
    );
  }
}

const mapStateToProps = state => ({
  show: state.displayCVReducer.show
});

const myActions = { dosomething, showthething };

export default connect(
  mapStateToProps,
  myActions
)(FirstSection);
