import React, { Component } from "react";
import styled from "styled-components";
import { scrollhappened } from "../../actions/Actions";
import { connect } from "react-redux";

const SectionWrapper = styled.section`
  height: 100vh;
  background: #b6be9c;
`;

class SummarySection extends Component {
  render() {
    return <SectionWrapper>hiiii</SectionWrapper>;
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
