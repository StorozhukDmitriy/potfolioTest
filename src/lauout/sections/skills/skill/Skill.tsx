import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";

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
  width: 380px;
  padding: 62px 20px 40px 20px;
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

const IconWrapper = styled.div`
  position: relative;
  z-index: 3;
  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg) translate(-50%, -50%);
    z-index: -1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`;
