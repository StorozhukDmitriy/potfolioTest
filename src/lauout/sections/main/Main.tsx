import styled from "styled-components";
import photo from "../../../assets/images/photo_2024-09-14_01-29-26.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-around" align="center" wrap="wrap">
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
  margin-right: 20px;
  @media ${Theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`;

const StyledMain = styled.section`
  min-height: 100dvh;
  display: flex;
  /* align-items: center; */
`;

const MainTitle = styled.h1`
  ${font({ weight: 400, Fmax: 27, Fmin: 20 })}
`;
const Name = styled.h2`
  ${font({
    family: "Josefine Sans, sans-serif",
    weight: 700,
    Fmax: 50,
    Fmin: 36,
  })}
  letter-spacing: 0.05em;
  margin: 10px 0;
  span {
    position: relative;
    z-index: 1;
    white-space: nowrap;
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
  @media ${Theme.media.mobile} {
    margin: 15px 0 22px;
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
    @media ${Theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }
  @media ${Theme.media.mobile} {
    margin-top: 65px;
  }
`;
