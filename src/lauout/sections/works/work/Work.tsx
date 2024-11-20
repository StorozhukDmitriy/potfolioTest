import styled from "styled-components";

type WorkPropsType = {
  title?: string;
  text?: string;
  src:string
};
export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={props.src} />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href="#">DEMO</Link>
      <Link href="#">CODE</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
background-color: #b7c92c`;

const Image = styled.img``;

const Link = styled.a``;

const Title = styled.h3``;

const Text = styled.p``;
