import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";
// Style for skill
const Skill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 45px 20px 46px;
  @media ${Theme.media.mobile} {
    padding: 45px 0 46px;
  }
`;
const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;
const SkillText = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  line-height: 1.4;
`;

// Style for skills
const Skills = styled.section`
  /* background-color: chocolate; */
  /* text-align: center;
  display: flex; */
  `;

export const S = {
  Skill,
  SkillTitle,
  SkillText,
  Skills
};