import React, { useState, useCallback, useEffect } from "react"
import styled, { createGlobalStyle, css, keyframes } from "styled-components"
import { Icon } from "@iconify/react"
import linkedinIcon from "@iconify/icons-brandico/linkedin"
import facebookIcon from "@iconify/icons-brandico/facebook"

import { PropsWithTheme } from "../types"

import { media } from "../constants"
import { Seo } from "../components/Seo"
import { Layout } from "../components/Layout"
import { Wave } from "../components/Wave"
import { useBreakPoints } from "../hooks/useBreakPoints"
import { Container } from "../styles/Container"
import { MobileWave } from "../styles/MobileWave"
import { Flex } from "../styles/Flex"
import { Button } from "../components/Button"

import LogoSvg from "../assets/svg/logo.inline.svg"
import PhoneSvg from "../assets/svg/phone.inline.svg"

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: PropsWithTheme) => theme.colors.home.bg};

    ${media.max("md")} {
      background: ${({ theme }: PropsWithTheme) => theme.colors.home.wave};
    }
  }
`

const Prestation = styled.h1`
  display: block;
  text-transform: uppercase;
  font-size: 5rem;
  font-weight: 900;
  margin: 0;

  ${media.max("lg")} {
    font-size: 4rem;
  }

  ${media.max("md")} {
    font-size: 3rem;
  }
`

const Prestations = styled.div`
  position: relative;
  padding-left: 35px;

  &:before {
    content: "*";
    position: absolute;
    left: 0;
    top: -8px;
    font-weight: 900;
    font-size: 5rem;
    color: ${({ theme }: PropsWithTheme) => theme.colors.common.primary};

    ${media.max("lg")} {
      font-size: 4rem;
    }

    ${media.max("md")} {
      font-size: 3rem;
    }
  }

  &:after {
    content: "";
    display: block;
    width: 200px;
    height: 12px;
    position: absolute;
    bottom: 3px;
    left: 37px;
    z-index: -1;
    background: ${({ theme }: PropsWithTheme) => theme.colors.common.primary};

    ${media.max("lg")} {
      height: 10px;
      width: 160px;
      left: 30px;
    }

    ${media.max("md")} {
      height: 8px;
      width: 126px;
      left: 22px;
    }
  }

  ${media.max("lg")} {
    padding-left: 25px;
  }

  ${media.max("md")} {
    padding-left: 20px;
  }
`

const NotaBene = styled.div`
  position: relative;
  padding-left: 15px;

  &:before {
    content: "*";
    position: absolute;
    left: 0;
    top: -2px;
    font-weight: 900;
    color: ${({ theme }: PropsWithTheme) => theme.colors.common.primary};
  }
`

const Social = styled.div`
  a {
    margin-left: 20px;
  }
`

const Logo = styled(LogoSvg)`
  ${media.max("md")} {
    width: 164px;
  }
`

const Phone = styled(PhoneSvg)`
  ${media.max("lg")} {
    width: 300px;
  }

  ${media.max("md")} {
    width: 226px;
    height: 140px;
    margin-top: 20px;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const LoadingScreen = styled.div`
  opacity: 1;
  z-index: 10;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.home.bg};
  animation: 0.4s ${fadeOut} ease forwards;
  animation-delay: 0.2s;
`

const IndexPage = () => {
  const [hover, setHover] = useState(false)
  const [loadingEnd, setLoadingEnd] = useState(false)
  const { isDeviceMin, isDeviceMax } = useBreakPoints()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingEnd(true)
    }, 700)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const onButtonHover = useCallback(() => {
    return setHover(!hover)
  }, [hover, setHover])

  const isDeviceMinMd = isDeviceMin("md")
  const isDeviceMaxSm = isDeviceMax("sm")
  const isDeviceMaxMd = isDeviceMax("md")

  return (
    <Layout>
      <GlobalStyles />
      <Seo
        title="Pretidev - votre partenaire de confiance pour des projets de qualité"
        description="Pretidev, spécialiste du web design, et du développement web vous accompagne dans vos projets sur-mesures de qualité : développement, graphisme, conseil, formation"
      />

      {!loadingEnd && <LoadingScreen />}

      {isDeviceMinMd && <Wave accelerate={hover} />}
      {isDeviceMaxSm && <MobileWave />}

      <Container className="container">
        <Flex
          style={{ height: isDeviceMinMd ? "100vh" : "auto" }}
          justifyContent={"space-between"}
          direction="column"
        >
          <Flex style={{ height: 140 }} alignItems="center">
            <Logo />
          </Flex>

          <Flex
            style={{ minWidth: "100%" }}
            alignItems="center"
            justifyContent={isDeviceMaxSm ? "space-between" : "space-around"}
            direction={isDeviceMaxSm ? "column" : "row"}
          >
            <Prestations>
              <Prestation>Webdesign.</Prestation>
              <Prestation>Développement.</Prestation>
              <Prestation>Conseil.</Prestation>
            </Prestations>

            <aside>
              <Phone style={{ marginTop: isDeviceMaxMd ? 40 : 0 }} />
            </aside>
          </Flex>

          <Flex
            justifyContent="center"
            style={{ width: "100%", marginTop: isDeviceMaxMd ? 40 : 0 }}
          >
            <Button
              tag="link"
              to="/contact"
              onMouseEnter={onButtonHover}
              onMouseLeave={onButtonHover}
            >
              {isDeviceMaxMd
                ? "Nous contacter"
                : "Question ? Devis ? → par ici"}
            </Button>
          </Flex>

          <Flex
            style={{
              height: 100,
              width: "100%",
              marginTop: isDeviceMaxMd ? 30 : 0,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <NotaBene>rien à ajouter</NotaBene>
            <Social>
              <a href="https://www.linkedin.com/company/pretidev">
                <Icon
                  icon={linkedinIcon}
                  style={{
                    color: "#00222d",
                    fontSize: isDeviceMaxMd ? "25px" : "30px",
                  }}
                />
              </a>
              <a href="https://www.facebook.com/Pretidev-114605563614101">
                <Icon
                  icon={facebookIcon}
                  style={{
                    color: "#00222d",
                    fontSize: isDeviceMaxMd ? "25px" : "30px",
                  }}
                />
              </a>
            </Social>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  )
}

export default IndexPage
