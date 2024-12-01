import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { IconWrapper } from "../../../../components/IconWrapper";

import { S } from "../skill/Skill_Styles";

type SkillPropsType = {
  iconId: string;
  title: string;
  discription: string;
};
export const Skill = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <FlexWrapper align="center" direction="column">
        <IconWrapper>
          <Icon iconId={props.iconId} />
        </IconWrapper>

        <S.SkillTitle>{props.title}</S.SkillTitle>
        <S.SkillText>
          {props.discription ||
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
        </S.SkillText>
      </FlexWrapper>
    </S.Skill>
  );
};
