import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

const motion = () => keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
`;

const RingSpinner = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 50px;
  height: 50px;
  border: 6px solid white;
  border-radius: 50%;
  animation: ${() => motion()} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: white transparent transparent transparent;
  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const Loader: FC<Props> = props => (
  <Wrapper {...props}>
    <RingSpinner />
  </Wrapper>
);

export default Loader;

interface Props {
  color?: string;
}
