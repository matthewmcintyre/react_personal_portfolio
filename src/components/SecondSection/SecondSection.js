import React, { Component } from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  height: 100vh;
  background: blue;
`;

class SecondSection extends Component {
  render() {
    return <SectionWrapper>Hi I'm Matt</SectionWrapper>;
  }
}

export default SecondSection;
