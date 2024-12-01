
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/button/Button";
import { Container } from "../../../components/Container";
import { S } from "../contact/Contact_styles";
import React from "react";

export const Contact:React.FC = () => {
  return (
    <S.Contact>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form>
          <S.Field placeholder="name" />
          <S.Field placeholder="subject" />
          <S.Field placeholder="message" as="textarea" />
          <Button type="submit">send message</Button>
        </S.Form>
      </Container>
    </S.Contact>
  );
};
