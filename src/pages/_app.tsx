import React, { useState, FC, ReactNode } from "react"
import App from "next/app"
import { InferGetServerSidePropsType } from "next"
import { ThemeProvider, createGlobalStyle } from "styled-components"

import { PropsWithTheme, DeviceType } from "../types"

import { defaultTheme } from "../constants"

import AppContext, {
  initContext,
  AppContextInterface,
} from "../contexts/appContext"

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }: PropsWithTheme) => theme.colors.common.text};
    font-size: 1.6em;
  }
`

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [deviceType, setDeviceType] = useState<DeviceType>("sm")

  const appContext: AppContextInterface = {
    ...initContext,
    deviceType,
    setDeviceType,
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContext.Provider value={appContext}>
        <GlobalStyle />
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  )
}

export default class AppComponent extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
