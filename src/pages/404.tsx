import React from "react"
import styled, { createGlobalStyle, css } from "styled-components"
import { Link } from "gatsby"

import { PropsWithTheme } from "../types"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import { Container } from "../styles/Container"
import { Flex } from "../styles/Flex"

import Logo from "../assets/svg/logo.inline.svg"

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: PropsWithTheme) => theme.colors.home.bg};
  }
`

const StatusCode = styled.div`
  font-size: 6em;
  font-weight: 900;
  border-right: 3px solid
    ${({ theme }: PropsWithTheme) => theme.colors.home.wave};
  margin-right: 20px;
  padding-right: 20px;
`

const Title = styled.h1`
  text-transform: uppercase;
  margin: 0;
  font-weight: 900;
`

const NotFound = () => {
  return (
    <Layout>
      <GlobalStyles />

      <Seo
        title="404: Page non trouvée"
        description="Rien à voir ici... Pour le moment"
      />

      <Container>
        <Flex direction="column" justifyContent="center" flex="1">
          <Flex
            justifyContent="center"
            style={{ width: "100%", marginTop: 60 }}
          >
            <Link to="/">
              <Logo />
            </Link>
          </Flex>

          <Flex
            alignItems="center"
            justifyContent="center"
            style={{ height: "calc(100vh - 300px)", width: "100%" }}
          >
            <StatusCode>404</StatusCode>
            <div>
              <Title>Ooops !</Title>
              <p>Rien à voir ici. Pour le moment...</p>
            </div>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  )
}

export default NotFound
