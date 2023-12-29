import { thirdPurple } from "@/styles/colors";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  margin: 0.6rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-width: 25rem;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0 3rem;
`;

export const Left = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  align-items: center;
`;

export const Right = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
`;

export const Text = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 1rem;
  color: ${thirdPurple};
`;

export const Arrow = styled(IoIosArrowForward)`
  font-size: 2.4rem;
  color: ${thirdPurple};
`;
