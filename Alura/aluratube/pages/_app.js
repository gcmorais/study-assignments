import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/global";
import ColorModeProvider,{ ColorModeContext } from "../src/components/Menu/components/ColorMode";
import RegisterVideo from "../src/components/RegisterVideo";

const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        backgroundLevel3: "#313131",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
        textColorBase2: "#FFFFFF"
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        backgroundLevel3: "#f9f9f9",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
        textColorBase2: "#222222"
    }
};


function ProviderWrapper(props){
    return (
        <ColorModeProvider initialMode = {"dark"}>
            {props.children}
        </ColorModeProvider>
    )
}


function MyApp({ Component, pageProps }) {

    const contexto = React.useContext(ColorModeContext);
    {contexto.mode}

    return (
        
        <ThemeProvider theme={theme[contexto.mode]}>
            <CSSReset />
            <Component {...pageProps} />
            <RegisterVideo />
        </ThemeProvider>
      
    )
  }

  export default function _App(props){
    return (
        <ProviderWrapper>
            <MyApp {...props} />
        </ProviderWrapper>
    )
  }