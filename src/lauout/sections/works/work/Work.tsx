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
  max-width: 540px;
  width: 100%;
  background-color: ${Theme.colors.secondaryBg};
  ${Link} {
    padding: 10px 0;
    margin-right: 20px;
  }
`;

const Image = styled.img`
  height: 260px;
`;

const ImageWrapper = styled.div`
  position: relative;
  &:hover {
    &::before {
      backdrop-filter: blur(8px);
      background: rgba(0, 0, 0, 0.3);
    }
    ${Button} {
      opacity: 1;
    }
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }

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
