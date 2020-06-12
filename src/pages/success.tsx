import React, { FC } from "react"
import styled, { createGlobalStyle } from "styled-components"
import Link from "next/link"

import { PropsWithTheme } from "../types"

import { Seo } from "../components/Seo"
import { Container } from "../styles/Container"
import { Flex } from "../styles/Flex"

import Logo from "../assets/svg/logo.svg"
import ThanksSvg from "../assets/svg/thanks.svg"
import { Button } from "../components/Button"

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

const Success: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Seo
        title="Pretidev - votre partenaire de confiance pour des projets de qualité"
        description="Pretidev, spécialiste du web design, et du développement web vous accompagne dans vos projets sur-mesures de qualité : développement, graphisme, conseil, formation"
      />

      <Container width="600px">
        <Flex
          justifyContent="center"
          style={{ width: "100%", marginTop: 40, marginBottom: 40 }}
        >
          <Link href="/">
            <a>
              <Logo width={180} />
            </a>
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

          <Button to="/" tag="link" style={{ marginTop: 20 }}>
            Retourner à l&apos;accueil
          </Button>
        </Flex>
      </Container>
    </>
  )
}

export default Success
