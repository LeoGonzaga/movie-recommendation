import styled from "styled-components";

export const Container = styled.div`
  width: 10rem;
  height: 10rem;
  margin: 0.3rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.primary};

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.4rem;

  &:hover {
    opacity: 0.8;
  }
`;
