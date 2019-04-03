import React, { Component } from "react";
import styled from "styled-components";
import { scrollhappened } from "../../actions/Actions";
import { connect } from "react-redux";
import SkillBox from "./SkillBox";
import {
  faLaptopCode,
  faToolbox,
  faUserSecret,
  faScroll
} from "@fortawesome/free-solid-svg-icons";

const SectionWrapper = styled.section`
  height: 1700px;
  background: #ffe0b5;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0px 20px;

  @media (min-width: 700px) {
    height: 100vh;
    padding: 0px 20px;
  }
`;

const Heading = styled.h1`
  color: black;
  align-self: center;
`;

const WriteUpWrapper = styled.div`
  align-self: center;
  width: 90%;
  background-color: #9bf3f0;
  padding: 10px;
  border: 1px solid black;

  font-size: 14px;

  @media (min-width: 700px) {
    padding: 20px;
    margin: 20px;
    font-size: 15px;
    width: 80%;
  }
`;

const WriteUp = styled.p`
  padding: 10px;
`;

const WriteUpCentered = styled.p`
  text-align: center;
  text-decoration: underline;
`;

//organizes skillbox in grid format
const SkillBoxContainer = styled.div`
  display: grid;
  justify-content: space-around;

  grid-template-columns: repeat(1, 90%);
  grid-template-rows: repeat(4, 300px);

  grid-gap: 40px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(4, 23%);
    grid-template-rows: repeat(1, auto);
    grid-gap: 0px;
  }
`;

//Lazy programming, eventually will make this mapped
const FrontEndSkillList = (
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Mobile Responsiveness</li>
    <li>JavaScript</li>
    <li>React</li>
    <li>Styled-Components</li>
    <li>Redux</li>
  </ul>
);

const ToolboxSkillList = (
  <ul>
    <li>GitHub</li>
    <li>GitHub Pages</li>
    <li>NPM</li>
    <li>VSCode</li>
    <li>MacOS</li>
    <li>Windows</li>
  </ul>
);

const MeSkillList = (
  <ul>
    <li>Gym</li>
    <li>Cars</li>
    <li>Music</li>
    <li>Gaming</li>
    <li>Food</li>
    <li>Beer</li>
    <li>Unordered Lists</li>
  </ul>
);

const ExperienceSkillList = (
  <ul>
    <li>Service Desk Technician</li>
    <li>Field Services Engineer</li>
    <li>Windows 10 rollout Engineer</li>
  </ul>
);

class SummarySection extends Component {
  render() {
    return (
      <SectionWrapper id="summarysection">
        <Heading>Skills and Stack</Heading>

        <SkillBoxContainer>
          <SkillBox
            icon={faLaptopCode}
            title="Front End Skills"
            contentIntro="My goal over the past 3 months of directed learning has been to start building my projects with a Front End Framework. I chose React. Below is what I have focused on learning so far:"
            contentList={FrontEndSkillList}
          />

          <SkillBox
            icon={faToolbox}
            title="Development Toolbox"
            contentIntro='As an Apple "Enthusiast", I do all of my development on my MacBook. However, given my past work experience I am also pretty handy on Windows. Here is what I build my projects with:'
            contentList={ToolboxSkillList}
          />

          <SkillBox
            icon={faUserSecret}
            title="Me"
            contentIntro="I love Web Development. And other stuff:"
            contentList={MeSkillList}
          />

          <SkillBox
            icon={faScroll}
            title="Experience"
            contentIntro="I have worked in IT for 5 years and have made the conscious decision to move into Web Development. After years self-studying off and on I finally decided to pull the trigger and have dedicated the past 3 months to chasing my passion and (hopefully) getting hired! Below are my previous roles:"
            contentList={ExperienceSkillList}
          />
        </SkillBoxContainer>

        <WriteUpWrapper>
          <WriteUp>
            With a background in IT Support, I build on a strong foundation with
            an enthusiasm for all things tech. I am ready to take the next step
            and am confident my eagerness to learn will prove invaluable to any
            organization.
          </WriteUp>

          <WriteUpCentered>
            Check out some of my Front End projects below!
          </WriteUpCentered>
        </WriteUpWrapper>
      </SectionWrapper>
    );
  }
}

const mapStateToProps = state => ({
  scrolled: state.displaySummary.scrolled
});

const myActions = { scrollhappened };

export default connect(
  mapStateToProps,
  myActions
)(SummarySection);
