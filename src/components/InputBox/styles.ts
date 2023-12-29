import {
  primaryPurple,
  secondaryPurple,
} from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 0;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${primaryPurple};
`;

export const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  color: ${secondaryPurple};
`;
