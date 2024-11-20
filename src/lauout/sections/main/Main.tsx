import styled from "styled-components";
import photo from "../../../assets/images/photo_2024-09-14_01-29-26.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";
export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <div>
            <SmallText>Hi There</SmallText>
            <Name>
              I am <span>Dmitrii Storozhuk</span>
            </Name>
            <MainTitle>A Web Developer.</MainTitle>
          </div>
          <PhotoWrapper>
            <Photo src={photo} alt="" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};
const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const StyledMain = styled.section`
  min-height: 100dvh;
  display: flex;
  /* align-items: center; */
`;

const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 27px;
`;
const Name = styled.h2`
  font-family: "Josefine Sans", sans-serif;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0.05em;
  margin: 10px 0;
  span {
    position: relative;
    z-index: 1;
    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${Theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`;

const SmallText = styled.span`
  font-weight: 400;
  font-size: 14px;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${Theme.colors.accent};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
  }
`;
