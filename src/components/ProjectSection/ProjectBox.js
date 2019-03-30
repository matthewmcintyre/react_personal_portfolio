import React from "react";
import styled from "styled-components";

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
  display: ${props => (props.menuopen ? "block" : "none")};

  :hover {
    opacity: 1;
  }
`;

const ProjectInfoName = styled.p`
  position: absolute;
  top: 5%;
  left: 50%;
`;

const ProjectInfoList = styled.p``;

const ProjectInfoLink = styled.div``;

//the actual image
const ProjectImg = styled.img`
  width: 100%;
  display: block;
  border: 1px solid black;
  margin-bottom: 10px;
`;

function ProjectBox(props) {
  return (
    <Project>
      <ProjectImg src={props.src} />
      <ProjectInfo>
        <ProjectInfoName>Hi</ProjectInfoName>
        <ProjectInfoList>Hi</ProjectInfoList>
        <ProjectInfoLink>Hi</ProjectInfoLink>
        <ProjectInfoName>Hi</ProjectInfoName>
      </ProjectInfo>
    </Project>
  );
}

export default ProjectBox;
