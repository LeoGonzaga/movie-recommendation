import styled from "styled-components";

type FlexContentProps = {
  direction?: string;
  align?: string;
  justify?: string;
};
export const FlexContent = styled.div<FlexContentProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex-wrap: wrap;
  text-align: center;

  padding: 10px;
`;

type RowProps = {
  width?: number;
  height?: number;
};
export const Row = styled.div<RowProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: green;
`;
