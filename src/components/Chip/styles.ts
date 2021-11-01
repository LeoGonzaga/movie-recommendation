import styled from "styled-components";

type ChipProps = {
  checked: boolean;
};

export const Container = styled.div<ChipProps>`
  width: 10rem;
  height: 10rem;
  margin: 0.3rem;
  border-radius: 4px;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, checked }) =>
    checked ? "#502170" : theme.primary};
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-size: 1.4rem;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;
