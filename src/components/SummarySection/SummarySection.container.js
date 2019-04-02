import React, { Component } from "react";
import styled from "styled-components";
import { scrollhappened } from "../../actions/Actions";
import { connect } from "react-redux";

const SectionWrapper = styled.section`
  height: 100vh;
  background: #747e7d;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0px 20px;
`;

const Heading = styled.h1`
  color: black;
  align-self: center;
`;

const ListWrapper = styled.ul`
  margin: 0px 30px;
`;

const ListItem = styled.li``;

const WriteUp = styled.p``;

//freecodecamp certs at the bottom on mobile
//dev skills list
//background of my IT work

class SummarySection extends Component {
  render() {
    return (
      <SectionWrapper id="summarysection">
        <Heading>Skills and Stack</Heading>

        <ListWrapper>
          <ListItem>Mobile Responsive</ListItem>
          <ListItem>ReactJS</ListItem>
          <ListItem>Redux</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>HTML</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>GitHub</ListItem>
          <ListItem>VSCode</ListItem>
          <ListItem>Styled-Components</ListItem>
        </ListWrapper>
        <WriteUp>
          With a background in IT support I build on a strong foundation with a
          passion for technology.
        </WriteUp>
        <WriteUp>
          I am improving everyday and am seeking the opportunity to prove
          myself.
        </WriteUp>
        <WriteUp>Check out some of my work below!</WriteUp>
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
