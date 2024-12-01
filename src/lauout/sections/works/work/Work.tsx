import styled from "styled-components";
import { Link } from "../../../../components/Link";
import { Theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/button/Button";

type WorkPropsType = {
  title?: string;
  text?: string;
  src: string;
};
export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <ImageWrapper>
        <Image src={props.src} />
        <Button>view project</Button>
      </ImageWrapper>

      <Description>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href="#">DEMO</Link>
        <Link href="#">CODE</Link>
      </Description>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  width: 330px;
  background-color: ${Theme.colors.secondaryBg};
  flex-grow: 1;
  ${Link} {
    padding: 10px 0;
    & + ${Link} {
      margin-left: 20px;
    }
  }

  @media ${Theme.media.desktop} {
    max-width: 540px;
  }
`;

const Image = styled.img`
  min-height: 260px;
  max-width: 540px;
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &::before {
      width: 100%;
      height: 100%;
    }
  }
  &::before {
    backdrop-filter: blur(4px);
    background: rgba(0, 0, 0, 0.3);
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
    }
  }

  @media ${Theme.media.tablet} {
    ${Button} {
      opacity: 1;
    }
    &::before {
      opacity: 1;
    }
  }
`;

const Title = styled.h3`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.06em;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-align: start;
  margin: 14px 0 10px;
`;

const Description = styled.div`
  padding: 25px 20px;
`;
