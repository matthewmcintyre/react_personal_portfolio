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

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(90px, 40vw));
    grid-template-rows: repeat(3, minmax(80px, 50vh));
  }
`;

//project box that shows extra info on hover and has clickable link to gh pages
const Project = styled.div`
  display: block;
  justify-self: center;
  object-fit: cover;
  transition: 1s;
  position: relative;

  :hover {
    opacity: 0.2;
  }
`;

// contains infoname, infolist and infolink
const ProjectInfo = styled.div`
  position: absolute;
  top: 5%;
`;

const ProjectInfoName = styled.p``;

const ProjectInfoList = styled.p``;

const ProjectInfoLink = styled.div``;

//the actual image
const ProjectImg = styled.img`
  width: 100%;
  display: block;
  border: 1px solid black;
  margin-bottom: 10px;
`;

class SummarySection extends Component {
  render() {
    return (
      <SectionWrapper>
        <ProjectsWrapper id="projectsection">
          <Project>
            <ProjectImg src={markdown_previewer} />
            <ProjectInfo>Hi</ProjectInfo>
          </Project>
          <Project>
            <ProjectImg src={product_landing} />
          </Project>
          <Project>
            <ProjectImg src={random_quote_machine} />
          </Project>
          <Project>
            <ProjectImg src={survey_form} />
          </Project>
          <Project>
            <ProjectImg src={technical_documentation} />
          </Project>
          <ProjectBox src={tribute_page} />
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
