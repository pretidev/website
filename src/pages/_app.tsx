import React, { useState, FC, ReactNode } from "react"
import App, { AppContext, AppProps } from "next/app"
import { ThemeProvider, createGlobalStyle } from "styled-components"

import { PropsWithTheme, DeviceType } from "../types"

import { defaultTheme } from "../constants"

import Context, {
  initContext,
  AppContextInterface,
} from "../contexts/appContext"
import { getSizesFallback } from "../services/responsive"

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
  userAgent: string
}

export const Layout: FC<LayoutProps> = ({ children, userAgent }) => {
  const [deviceType, setDeviceType] = useState<DeviceType>(
    getSizesFallback(userAgent)
  )

  const appContext: AppContextInterface = {
    ...initContext,
    deviceType,
    setDeviceType,
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Context.Provider value={appContext}>
        <GlobalStyle />
        {children}
      </Context.Provider>
    </ThemeProvider>
  )
}

interface AppComponentProps extends AppProps {
  userAgent: string
}

export default class AppComponent extends App<AppComponentProps> {
  static getInitialProps({ ctx }: AppContext): any {
    return {
      props: {
        userAgent: ctx?.req?.headers["user-agent"],
      },
    }
  }

  render(): JSX.Element {
    const { Component, pageProps, userAgent } = this.props

    return (
      <Layout userAgent={userAgent}>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
