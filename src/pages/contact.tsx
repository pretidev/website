import React from "react"
import styled, { createGlobalStyle, css } from "styled-components"

import { PropsWithTheme } from "../types"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"

import LogoSvg from "../assets/svg/logo.inline.svg"
import { Container } from "../styles/Container"
import { Button } from "../components/Button"
import { Flex } from "../styles/Flex"
import { Link } from "gatsby"

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

const Contact = () => {
  return (
    <Layout>
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
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <Flex direction="column" justifyContent="center" flex="1">
            <Flex justifyContent="center" style={{ width: "100%" }}>
              <Link to="/">
                <Logo />
              </Link>
            </Flex>

            <Label>Nom complet</Label>
            <Input type="text" name="fullname" />

            <Label>Email</Label>
            <Input type="text" name="email" />

            <Label>Message</Label>
            <Textarea name="message" />

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
    </Layout>
  )
}

export default Contact
