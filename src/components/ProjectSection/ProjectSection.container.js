import React, { Component } from "react";
import styled from "styled-components";

import product_landing from "../../images/product-landing.png";
import random_quote_machine from "../../images/random-quote-machine.png";

import technical_documentation from "../../images/technical-documentation.png";

import ProjectBox from "./ProjectBox";

//new project images
import javascript_calculator from "../../images/javascript-calculator.png";
import drum_machine from "../../images/drum-machine.png";
import pomotodo from "../../images/pomotodo.png";

//handles section and flexbox
const SectionWrapper = styled.section`
  height: 200vh;
  background: #fefae0;
  display: flex;
  justify-content: center;

  @media (min-width: 700px) {
    height: 150vh;
  }
`;

//wraps project boxes in grid layout
const ProjectsWrapper = styled.div`
  display: grid;
  align-self: center;
  height: 100%;
  justify-content: center;
  align-content: space-around;

  padding: 10px;
  grid-template-columns: repeat(1, 80%);
  grid-template-rows: repeat(6, auto);

  @media (orientation: landscape) {
    grid-template-columns: repeat(2, 35%);
    grid-template-rows: repeat(3, 20%);
    justify-content: space-evenly;
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 35%);
    grid-template-rows: repeat(3, 20%);
    justify-content: space-evenly;
  }
`;

class SummarySection extends Component {
  render() {
    return (
      <SectionWrapper>
        <ProjectsWrapper id="projectsection">
          <ProjectBox
            src={drum_machine}
            name="Drum Machine"
            stack="React/Redux"
            id="drum_machine"
          />

          <ProjectBox
            src={product_landing}
            name="Product Landing"
            stack="HTML/CSS"
            id="Product_Landing_Page"
          />

          <ProjectBox
            src={random_quote_machine}
            name="Random Quote Machine"
            stack="React/CSS"
            id="random_quote_machine"
          />

          <ProjectBox
            src={pomotodo}
            name="Pomotodo"
            stack="React/Redux"
            id="Pomotodo"
          />

          <ProjectBox
            src={technical_documentation}
            name="Technical Documentation"
            stack="HTML/CSS"
            id="Technical_Documentation_Page"
          />

          <ProjectBox
            src={javascript_calculator}
            name="JavaScript Calculator"
            stack="React/Redux"
            id="javascript_calculator"
          />
        </ProjectsWrapper>
      </SectionWrapper>
    );
  }
}

export default SummarySection;
