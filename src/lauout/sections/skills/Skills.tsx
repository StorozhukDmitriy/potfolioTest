import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "./skill/Skill_Styles";
const skillData = [
  {
    iconId: "code",
    title: "html5",
    discription: "",
  },
  {
    iconId: "css",
    title: "css3",
    discription: "",
  },
  {
    iconId: "react",
    title: "React",
    discription: "",
  },
  {
    iconId: "typeScript",
    title: "typescript",
    discription: "",
  },
  {
    iconId: "styled-component",
    title: "styled-component",
    discription: "",
  },
  {
    iconId: "figma",
    title: "WEB DESIGN",
    discription: "",
  },
];
export const Skills = () => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap="wrap" justify="space-between">
          {skillData.map((s, index) => {
            return (
              <Skill
                iconId={s.iconId}
                key={index}
                title={s.title}
                discription={s.discription}
              />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
