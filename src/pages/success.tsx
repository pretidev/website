import React from "react"
import styled, { createGlobalStyle, css } from "styled-components"
import { Link } from "gatsby"

import { PropsWithTheme } from "../types"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import { Container } from "../styles/Container"
import { Flex } from "../styles/Flex"

import Logo from "../assets/svg/logo.inline.svg"
import ThanksSvg from "../assets/svg/thanks.inline.svg"

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: PropsWithTheme) => theme.colors.home.bg};
  }
`

const Thanks = styled(ThanksSvg)`
  margin-bottom: 30px;
`

const Title = styled.h1`
  text-transform: uppercase;
  margin: 0;
  font-weight: 900;
`

const Success = () => {
  return (
    <Layout>
      <GlobalStyles />
      <Seo
        title="Pretidev - votre partenaire de confiance pour des projets de qualité"
        description="Pretidev, spécialiste du web design, et du développement web vous accompagne dans vos projets sur-mesures de qualité : développement, graphisme, conseil, formation"
      />

      <Container width="600px">
        <Flex justifyContent="center" style={{ width: "100%", marginTop: 60 }}>
          <Link to="/">
            <Logo />
          </Link>
        </Flex>

        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ height: "calc(100vh - 300px)", width: "100%" }}
        >
          <Thanks />
          <Title>Merci !</Title>
          <p>Nous vous recontacterons très prochainement !</p>
        </Flex>
      </Container>
    </Layout>
  )
}

export default Success
