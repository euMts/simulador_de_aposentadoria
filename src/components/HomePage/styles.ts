import { primaryWhite, thirdPurple } from "@/styles/colors";
import styled, { keyframes } from "styled-components";

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
  position: relative;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
`;
