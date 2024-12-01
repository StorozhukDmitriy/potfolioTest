import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { IconWrapper } from "../../../../components/IconWrapper";
import { Theme } from "../../../../styles/Theme";

type SkillPropsType = {
  iconId: string;
  title: string;
  discription: string;
};
export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper align="center" direction="column">
        <IconWrapper>
          <Icon iconId={props.iconId} />
        </IconWrapper>

        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>
          {props.discription ||
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
        </SkillText>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
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
