import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  background-color: #bcd39c;
  border: 1px solid black;
  padding: 5px;
  @media (min-width: 700px) {
    padding: 20px;
  }
`;

const SkillIcon = styled(FontAwesomeIcon)`
  font-size: 27px;
  padding: 5px;
`;

//title at top section of box
const SkillTitle = styled.div`
  font-size: 16px;
  padding: 5px;
  font-weight: bold;
  text-decoration: underline;

  @media (min-width: 700px) {
    font-size: 19px;
  }
`;

//this currently does not do anything, probably because I need to set a static height
const SkillSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SkillSummaryIntro = styled.div`
  font-size: 14px;
  padding: 5px;
  align-self: flex-start;

  @media (min-width: 700px) {
    font-size: 17px;
    padding: 10px;
  }
`;

//brief write up on the relevant skill
const SkillSummaryList = styled.div`
  font-size: 12px;
  padding: 5px 30px;
  align-self: flex-start;

  @media (min-width: 700px) {
    font-size: 15px;
    padding: 10px 30px;
  }
`;

function SkillBox(props) {
  return (
    <SkillWrapper>
      <SkillIcon icon={props.icon} />
      <SkillTitle>{props.title}</SkillTitle>
      <SkillSummaryWrapper>
        <SkillSummaryIntro>{props.contentIntro}</SkillSummaryIntro>
        <SkillSummaryList>{props.contentList}</SkillSummaryList>
      </SkillSummaryWrapper>
    </SkillWrapper>
  );
}

export default SkillBox;
