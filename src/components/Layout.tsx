import React, { ReactNode } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { defaultTheme } from "../constants"
import { PropsWithTheme } from "../types"

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

export interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>{children}</div>
    </ThemeProvider>
  )
}
