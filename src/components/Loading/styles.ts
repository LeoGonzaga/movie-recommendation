import styled, { keyframes } from "styled-components";

const looping = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  border: 8px solid ${({ theme }) => theme.text}; 
  border-top: 8px solid ${({ theme }) => theme.primary}; 
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${looping} 0.8s both infinite;
  display: flex;
  align-self: center;
`;
