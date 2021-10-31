import { createGlobalStyle } from "styled-components";
export const lightTheme = {
  background: "#140C26",
  primary: "#9913F2",
  text: "#fff",
};

export const darkTheme = {
  background: "#140C26",
  primary: "#9913F2",
  text: "#fff",
};
export const GlobalStyles = createGlobalStyle`
* {
   box-sizing: border-box;
}
body {
   margin: 0;
   padding: 0;
   font-family: sans-serif !important;
   background-color: ${({ theme }) => theme.background};
   color:${({ theme }) => theme.text};
   font-weight: 400;
   font-style: normal;
   transition: all 0.50s linear;
}
input, textarea, button {font-family: 'inherit'}
`;
