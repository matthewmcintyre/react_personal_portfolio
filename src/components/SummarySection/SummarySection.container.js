import React, { Component } from "react";
import styled from "styled-components";
import { scrollhappened } from "../../actions/Actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faHtml5,
  faJs
} from "@fortawesome/free-brands-svg-icons";

const SectionWrapper = styled.section`
  height: 100vh;
  background: #b6be9c;
`;

const Greeting = styled.h1`
  position: absolute;
  cursor: pointer;
  border-bottom: solid #606c38 5px;
  transition: 2s;
  border-bottom: solid #606c38 5px;

  color: ${props => (props.scrolled ? "red" : "green")};
`;

const WriteUp = styled.p``;
const IconWrapper = styled.div``;

class SummarySection extends Component {
  render() {
    return (
      <SectionWrapper>
        <WriteUp>Strong IT background</WriteUp>
        <IconWrapper>
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faCss3} />
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faJs} />
        </IconWrapper>
        <Greeting>testing for scroll</Greeting>
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
