import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";

export const Skills = () => {
  return (
    <SlyledSkills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap="wrap" justify="space-between" >
          <Skill iconId="code" title="html5" discription="" />
          <Skill iconId="css" title="css3" discription="" />
          <Skill iconId="react" title="React" discription="" />
          <Skill iconId="typeScript" title="typescript" discription="" />
          <Skill
            iconId="styled-component"
            title="styled components"
            discription=""
          />
          <Skill iconId="figma" title="WEB DESIGN" discription="" />
        </FlexWrapper>
      </Container>
    </SlyledSkills>
  );
};

const SlyledSkills = styled.section`
  /* background-color: chocolate; */
  /* text-align: center;
  display: flex; */
`;
