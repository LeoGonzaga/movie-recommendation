import styled from "styled-components";

export const Wrapper = styled.div`
  max-height: 700px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  height: 45px;
  width: 80%;
  padding: 10px;
  margin: 20px 0;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
`;
