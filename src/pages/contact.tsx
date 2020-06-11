import React, { FC } from "react"
import styled, { createGlobalStyle, css } from "styled-components"
import Link from "next/link"

import { PropsWithTheme } from "../types"

import { Seo } from "../components/Seo"
import { Container } from "../styles/Container"
import { Button } from "../components/Button"
import { Flex } from "../styles/Flex"

import LogoSvg from "../assets/svg/logo.svg"

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: PropsWithTheme) => theme.colors.home.bg};
  }
`

const Logo = styled(LogoSvg)`
  width: 180px;
  margin-top: 40px;
  margin-bottom: 60px;
`

const Label = styled.label`
  display: block;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 10px;
  margin-left: 5px;
`

const cssCommonFields = css`
  width: 100%;
  border: none;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 2px solid #fff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.04);
  font-size: 1em;
  box-sizing: border-box;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border: 2px solid
      ${({ theme }: PropsWithTheme) => theme.colors.common.primary};
  }
`

const Input = styled.input`
  height: 50px;
  padding: 0 10px;
  ${cssCommonFields}
`

const Textarea = styled.textarea`
  height: 150px;
  padding: 10px;
  ${cssCommonFields}
`

const Legal = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
`

const Contact: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Seo
        title="Pretidev - votre partenaire de confiance pour des projets de qualité"
        description="Pretidev, spécialiste du web design, et du développement web vous accompagne dans vos projets sur-mesures de qualité : développement, graphisme, conseil, formation"
      />

      <Container width="600px">
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          action="/success"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <Flex direction="column" justifyContent="center" flex="1">
            <Flex justifyContent="center" style={{ width: "100%" }}>
              <Link href="/">
                <Logo />
              </Link>
            </Flex>

            <Label>Nom complet</Label>
            <Input type="text" name="fullname" required />

            <Label>Email</Label>
            <Input type="email" name="email" required />

            <Label>Message</Label>
            <Textarea name="message" required />

            <Flex
              justifyContent="center"
              style={{ width: "100%", marginTop: 20 }}
            >
              <Button type="submit">Envoyer</Button>
            </Flex>

            <Legal>
              Vos informations sont utilisées uniquement afin que nous puissions
              vous recontacter. Elle ne sont pas conservées.
            </Legal>
          </Flex>
        </form>
      </Container>
    </>
  )
}

export default Contact
