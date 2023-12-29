import { primaryWhite, thirdPurple } from "@/styles/colors";
import styled, { keyframes } from "styled-components";
import { IoReturnUpForwardOutline } from "react-icons/io5";

export const cubeAnimation = keyframes`
    from {
        transform: scale(0) rotate(0deg) translate(-50%, -50%);
        opacity: 1;
    }
    to {
        transform: scale(20) rotate(960deg) translate(-50%, -50%);
        opacity: 0;
    }
`;

export const Background = styled.ul`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background: ${thirdPurple};
  overflow: hidden;
`;

export const BackgroundItem = styled.li`
  position: absolute;
  width: 10px;
  height: 10px;
  border: solid 1px #574bcf;
  color: transparent;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: ${cubeAnimation} 21s ease-in forwards infinite;
`;

export const BackgroundItem1 = styled(BackgroundItem)`
  animation-delay: 0s;
  left: 89vw;
  top: 70vh;
`;

export const BackgroundItem2 = styled(BackgroundItem)`
  animation-delay: 2s;
  left: 48vw;
  top: 4vh;
`;

export const BackgroundItem3 = styled(BackgroundItem)`
  animation-delay: 4s;
  left: 73vw;
  top: 37vh;
  border-color: #6a5cfd;
`;

export const BackgroundItem4 = styled(BackgroundItem)`
  animation-delay: 6s;
  left: 2vw;
  top: 81vh;
`;

export const BackgroundItem5 = styled(BackgroundItem)`
  animation-delay: 8s;
  left: 35vw;
  top: 56vh;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${primaryWhite};
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  margin-top: 3rem;
  position: relative; /* Add this line to make sure the Background is relative to the Container */
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.8rem 0 0 0;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
  margin: 1.5rem 0;
`;
interface TextProps {
  bold?: string;
}

export const Text = styled.h1<TextProps>`
  font-size: 1.5rem;
  font-weight: ${(props) => (props.bold === "true" ? 600 : 500)};
  color: ${thirdPurple};
`;

export const Value = styled.h1<TextProps>`
  font-size: 1.5rem;
  font-weight: ${(props) => (props.bold === "true" ? 600 : 500)};
  color: ${thirdPurple};
  /* width: 100%; */
  max-width: 15rem;
  overflow-wrap: break-word;
`;

export const UnderText = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  width: 100%;
  color: ${thirdPurple};
  overflow-wrap: break-word;
  max-width: 25rem;
  padding: 0.8rem 0 0 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  max-width: 35rem;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0 0 0;
`;

export const ReturnIcon = styled(IoReturnUpForwardOutline)`
  transform: scaleX(-1);
  font-size: 2rem;
  margin: 0 1rem 0 0;
  color: ${thirdPurple};
`;
