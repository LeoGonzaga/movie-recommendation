import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { GlobalStyles, lightTheme } from "../styles/theme.config";
import { ThemeProvider } from "styled-components";
import store from "../src/config/configureStore";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
