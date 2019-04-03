import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faHtml5,
  faJs
} from "@fortawesome/free-brands-svg-icons";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const FooterWrapper = styled.footer`
  background: #606c38;
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Author = styled.p`
  font-size: 10px;
  margin-left: 10px;
`;

const BuiltWithWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const BuiltWith = styled.p`
  font-size: 10px;
  margin-right: 5px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px;
`;

const ReactIcon = styled(FontAwesomeIcon)`
  animation: ${rotate} 4s linear infinite;
`;

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <Author>Matthew McIntyre, 2019</Author>

        <BuiltWithWrapper>
          <BuiltWith>Created with:</BuiltWith>
          <IconWrapper>
            <ReactIcon icon={faReact} />
            <FontAwesomeIcon icon={faCss3} />
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faJs} />
          </IconWrapper>
        </BuiltWithWrapper>
      </FooterWrapper>
    );
  }
}

export default Footer;
