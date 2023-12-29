import {
  primaryPurple,
  primaryWhite,
  secondaryPurple,
  secondaryWhite,
  thirdPurple,
} from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 35rem;
  background-color: ${primaryWhite};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

interface WrapperProps {
  hasbutton?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${secondaryWhite};
  border-radius: ${(props) =>
    props.hasbutton === "true" ? "3rem 3rem 0 0" : "3rem"};
`;

export const Button = styled.button`
  display: flex;
  border: none;
  z-index: 100;
  width: 100%;
  height: 5rem;
  bottom: 0;
  background-color: ${primaryPurple};
  flex-direction: column;
  border-radius: 0 0 3rem 3rem;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 0.2rem;
  text-align: center;
`;

interface TitleProps {
  white?: string;
}

export const Title = styled.h1<TitleProps>`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => (props.white === "true" ? secondaryWhite : thirdPurple)};
  padding: 0 1rem;
`;

export const SubTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: ${secondaryPurple};
  padding: 0 1rem;
`;
