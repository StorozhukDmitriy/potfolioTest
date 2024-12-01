import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

const Contact = styled.section``;

const Form = styled.form`
  max-width: 540px;
  min-height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  textarea {
    resize: none;
    height: 155px;
  }
`;

const Field = styled.input`
  width: 100%;
  border: 1px solid #4a4a4a;
  padding: 7px 15px;
  background-color: ${Theme.colors.secondaryBg};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: ${Theme.colors.font};
  cursor: pointer;
  &:hover {
    outline: ${Theme.colors.accent} solid 1px;
  }
  &::placeholder {
    color: ${Theme.colors.placeholderColor};
    text-transform: capitalize;
  }
  &:focus-visible {
    outline: ${Theme.colors.accent} solid 1px;
  }
`;

export const S = {
  Contact,
  Form,
  Field,
};
