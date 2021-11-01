import styled from "styled-components";

export const Container = styled.div`
  background-color: #4c4177;
  background-image: linear-gradient(360deg, #000 0%, #140c26 74%);
  height: 100vh;
`;

export const Content = styled.div`
  background-size: contain;
  background: fixed;
  overflow: hidden;
  max-height: 400px;
  width: 100%;
  margin-bottom: 1rem;
`;
export const Banner = styled.img`
  object-fit: contain;
  border-radius: 20px;
`;

export const Name = styled.h1``;

export const Description = styled.span`
  font-size: 1rem;
  margin-bottom: 40px;
  padding: 5px;
`;

export const Button = styled.button`
  width: 300px;
  height: 45px;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.primary};
  p {
    font-weight: bold;
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
  }
`;

export const Back = styled.button`
  border: none;
  padding: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;
