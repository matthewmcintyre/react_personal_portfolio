import React, { Component } from "react";
import styled from "styled-components";
import SkillBox from "./SkillBox";
import {
  faLaptopCode,
  faToolbox,
  faUserSecret,
  faScroll
} from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SectionWrapper = styled.section`
  height: 1800px;
  background: #dadada;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0px 10px;

  @media (min-width: 700px) {
    height: 100vh;
    padding: 0px 20px;
  }
`;

const WriteUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 90%;
  background-color: #7b6771;
  padding: 10px;
  border: 3px solid #5a5a5a;
  font-size: 14px;
  align-items: center;

  @media (min-width: 700px) {
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
    <li>Mobile Responsive</li>
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
    <li>Chrome Dev Tools</li>
  </ul>
);

const WriteUpContent =
  "I have structured my learning through freeCodeCamp's Front End Developer Course. In order to complete each certificate I have had to produce a number of projects that adhere to requirements outlined by freeCodeCamp. So far I have earned three Certificates.";

const FreeCodeCampCertButtonWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  padding: 20px 0px;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
    padding: 20px;
  }
`;

const FreeCodeCampCertButton = styled.div`
  color: #ccc;
  background: darkgreen;
  border: 2px solid #777;
  border-radius: 6px;
  padding: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: 0.5s;
  text-align: center;
  margin: 5px;

  :hover {
    color: #333333;
    background: #ccc;
  }
`;

const FreeCodeCampCertIcon = styled(FontAwesomeIcon)`
  padding: 0px 5px;
`;

class SummarySection extends Component {
  render() {
    return (
      <SectionWrapper id="summarysection">
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
            contentIntro='As an Apple "Enthusiast", I do all of my development on my MacBook using Visual Studio Code. I am expanding my skillset by directing my learning towards Webpack, Babel, and Jest. This is my currently what I work with:'
            contentList={ToolboxSkillList}
          />

          <SkillBox
            icon={faUserSecret}
            title="Me"
            contentIntro="I come from humble beginnings of softmodding consoles, building computers and managing private gaming servers. My ambition is to become a Full Stack Developer who will work on a diverse range of projects used by millions of people. I have relocated to London in order to experience Europe and pursue exciting career opportunities."
          />

          <SkillBox
            icon={faScroll}
            title="Experience"
            contentIntro="After much deliberation around when to make this career transition, I pulled the trigger at the end of January and the rest is history. I have spent countless hours honing my Front End Development skills with an intensive focus and I am ready for the next step. My projects are all published on GitHub and my previous work experience in IT Support is outlined on my LinkedIn."
          />
        </SkillBoxContainer>

        <WriteUpWrapper>
          <WriteUp>{WriteUpContent}</WriteUp>
          <FreeCodeCampCertButtonWrapper>
            <FreeCodeCampCertButton
              onClick={() =>
                window.open(
                  "https://www.freecodecamp.org/certification/matthewmcintyre/responsive-web-design"
                )
              }
            >
              <FreeCodeCampCertIcon icon={faFreeCodeCamp} />
              Responsive Web Design
            </FreeCodeCampCertButton>
            <FreeCodeCampCertButton
              onClick={() =>
                window.open(
                  "https://www.freecodecamp.org/certification/matthewmcintyre/javascript-algorithms-and-data-structures"
                )
              }
            >
              <FreeCodeCampCertIcon icon={faFreeCodeCamp} />
              Algorithms and Data Structures
            </FreeCodeCampCertButton>
            <FreeCodeCampCertButton
              onClick={() =>
                window.open(
                  "https://www.freecodecamp.org/certification/matthewmcintyre/front-end-libraries"
                )
              }
            >
              <FreeCodeCampCertIcon icon={faFreeCodeCamp} />
              Front End Libraries
            </FreeCodeCampCertButton>
          </FreeCodeCampCertButtonWrapper>
          <WriteUpCentered>
            Check out some of my Front End projects below!
          </WriteUpCentered>
        </WriteUpWrapper>
      </SectionWrapper>
    );
  }
}

export default SummarySection;
