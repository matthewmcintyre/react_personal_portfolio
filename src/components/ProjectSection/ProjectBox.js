import React from "react";
import styled from "styled-components";

const ProjectWrapper = styled.div`
  display: block;
  justify-self: center;
  object-fit: cover;
  transition: 1s;
  position: relative;
`;

//wraps the project so it only handles a hover on the img
const Project = styled.div`
  :hover img {
    opacity: 0.1;
  }

  :hover div {
    opacity: 1;
  }
`;

// contains infoname, infolist and infolink
const ProjectInfo = styled.div`
  opacity: 0;
  transition: 1s;
  display: flex;
  justify-content: center;
`;

const ProjectInfoName = styled.p`
  text-align: center;
`;

const ProjectInfoStack = styled.p`
  position: absolute;
  top: 15%;
`;

const ProjectInfoLinksContainer = styled.div`
  position: absolute;
  top: 60%;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const ProjectInfoButton = styled.div`
  cursor: pointer;
  background: #606c38;
  border-radius: 2px;
  padding: 5px;
  box-shadow: 1px 2px 4px;

  :hover {
    -webkit-transform: translate(1px, 1px);
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 3px;
  }
`;

//the actual image
const ProjectImg = styled.img`
  width: 100%;
  display: block;
  border: 1px solid black;
  margin-bottom: 10px;
  transition: 1s;
`;

function ProjectBox(props) {
  return (
    <ProjectWrapper>
      <Project>
        <ProjectImg src={props.src} />
        <ProjectInfo>
          <ProjectInfoStack>Built With: {props.stack}</ProjectInfoStack>
          <ProjectInfoLinksContainer>
            <ProjectInfoButton
              onClick={() =>
                window.open("https://matthewmcintyre.github.io/" + props.id)
              }
            >
              View Live
            </ProjectInfoButton>
            <ProjectInfoButton
              onClick={() =>
                window.open("https://github.com/matthewmcintyre/" + props.id)
              }
            >
              View Source
            </ProjectInfoButton>
          </ProjectInfoLinksContainer>
        </ProjectInfo>
      </Project>
      <ProjectInfoName>{props.name}</ProjectInfoName>
    </ProjectWrapper>
  );
}

export default ProjectBox;
