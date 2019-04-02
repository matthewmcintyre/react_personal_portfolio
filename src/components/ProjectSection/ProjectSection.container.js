import React, { Component } from "react";
import styled from "styled-components";
import { scrollhappened } from "../../actions/Actions";
import { connect } from "react-redux";
import markdown_previewer from "../../images/markdown previewer.png";
import product_landing from "../../images/product landing.png";
import random_quote_machine from "../../images/random quote machine.png";
import survey_form from "../../images/survey form.png";
import technical_documentation from "../../images/technical documentation.png";
import tribute_page from "../../images/tribute page.png";
import ProjectBox from "./ProjectBox";

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
            src={markdown_previewer}
            name="Markdown Previewer"
            stack="HTML/CSS"
            id="markdown_previewer"
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
            src={survey_form}
            name="Survey Form"
            stack="HTML/CSS"
            id="Survey_Form"
          />

          <ProjectBox
            src={technical_documentation}
            name="Technical Documentation"
            stack="HTML/CSS"
            id="Technical_Documentation_Page"
          />

          <ProjectBox
            src={tribute_page}
            name="Tribute Page"
            stack="HTML/CSS"
            id="Tribute_Page"
          />
        </ProjectsWrapper>
      </SectionWrapper>
    );
  }
}

//fix me later
const mapStateToProps = state => ({
  scrolled: state.displaySummary.scrolled
});

//hmmmm
const myActions = { scrollhappened };

export default connect(
  mapStateToProps,
  myActions
)(SummarySection);
