import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import SociakNetwork from "../../../assets/images/proj1.webp";
import Timer from "../../../assets/images/proj2.webp";
import { Container } from "../../../components/Container";
const items = ["All", "landing page", "React", "Testimony", "spa"];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <Menu menuItems={items} />
        <FlexWrapper>
          <Work
            title={"Social Network"}
            src={SociakNetwork}
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
          <Work
            title={"Timer"}
            src={Timer}
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  background-color: aqua;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
