import {
  primaryPurple,
  primaryWhite,
  secondaryWhite,
  thirdPurple,
} from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  background-color: ${primaryWhite};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: none;
  height: 5rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 0 0 0.2rem 0;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${secondaryWhite};
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
`;

export const Button = styled.button`
  display: flex;
  border: none;
  z-index: 100;
  width: 100%;
  height: 5rem;
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

export const Text = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${thirdPurple};
`;
