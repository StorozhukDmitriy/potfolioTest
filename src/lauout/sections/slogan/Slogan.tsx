import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/button/Button";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <SectionTitle>I Am Available For Freelance</SectionTitle>
      <Button>Hire me</Button>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  text-align: center;
  min-height: 30dvh;
  background-color: chocolate;
`;
