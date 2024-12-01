import photo from "../../../assets/images/photo_2024-09-14_01-29-26.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import React from "react";
import { S } from "../main/Main_Styles";
export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper justify="space-around" align="center" wrap="wrap">
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>
              I am <span>Dmitrii Storozhuk</span>
            </S.Name>
            <S.MainTitle>A Web Developer.</S.MainTitle>
          </div>
          <S.PhotoWrapper>
            <S.Photo src={photo} alt="" />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
