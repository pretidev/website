import React, { FC, useState } from "react"
import Link from "next/link"
import styled, { createGlobalStyle, css, keyframes } from "styled-components"
import { useForm } from "react-hook-form"
import axios from "axios"

import { PropsWithTheme } from "../types"

import { Seo } from "../components/Seo"
import { Container } from "../styles/Container"
import { Button } from "../components/Button"
import { Flex } from "../styles/Flex"

import ThanksSvg from "../assets/svg/thanks.svg"
import LogoSvg from "../assets/svg/logo.svg"
import validator from "validator"

interface FormFieldsProps {
  error?: boolean
}

interface Form {
  fullname: string
  email: string
  mail: string
  message: string
}

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: PropsWithTheme) => theme.colors.home.bg};
  }
`

const Logo = styled(LogoSvg)`
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
      ${({ theme }: PropsWithTheme<FormFieldsProps>) =>
        theme.colors.common.darkSecondary};
  }

  ${({ error, theme }: PropsWithTheme<FormFieldsProps>) =>
    error &&
    css`
      border: 2px solid ${theme.colors.common.darkPrimary};

      &:focus {
        border: 2px solid ${theme.colors.common.darkPrimary};
      }
    `};
`

const Input = styled.input<PropsWithTheme<FormFieldsProps>>`
  height: 50px;
  padding: 0 10px;
  ${cssCommonFields}
`

const Textarea = styled.textarea<PropsWithTheme<FormFieldsProps>>`
  height: 150px;
  padding: 10px;
  ${cssCommonFields}
`

const Legal = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
`

const Form = styled.form`
  /* Honey pot  */
  [name="mail"] {
    background: none;
    box-shadow: none;
    border: none;
    height: 1px;
    width: 1px;
    padding: 0;
    margin: 0;
  }
`

const FormGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`

const FormError = styled.span`
  position: absolute;
  bottom: 0px;
  font-size: 12px;
  margin-left: 5px;
  color: ${({ theme }: PropsWithTheme) => theme.colors.common.darkPrimary};
`

const ThanksSuccess = styled(ThanksSvg)`
  margin-bottom: 30px;
`

const TitleSuccess = styled.h1`
  text-transform: uppercase;
  margin: 0;
  font-weight: 900;
`

const fadeInKeyframes = keyframes`
  from {
    opacity: 0; 
    margin-top: -30px;
  }
  to {
    margin-top: 0px;
    opacity: 1;
  }
`

const FadeIn = styled.div`
  animation: 0.5s ${fadeInKeyframes} ease forwards;
`

const Contact: FC = () => {
  const { register, handleSubmit, errors } = useForm<Form>()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const onSubmit = async (data: Form) => {
    if (!formSubmitted) {
      setFormSubmitted(true)

      try {
        await axios.post("/api/contact", data)

        setIsSuccess(true)
      } catch (e) {
        alert("Une erreur est survenue, merci de réessayer plus tard.")
        setFormSubmitted(false)
      }
    }
  }

  return (
    <FadeIn>
      <GlobalStyles />
      <Seo
        title="Pretidev - votre partenaire de confiance pour des projets de qualité"
        description="Pretidev, spécialiste du web design, et du développement web vous accompagne dans vos projets sur-mesures de qualité : développement, graphisme, conseil, formation"
      />

      <Container width="600px">
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Flex direction="column" justifyContent="center" flex="1">
            <Flex justifyContent="center" style={{ width: "100%" }}>
              <Link href="/">
                <a>
                  <Logo width="180" />
                </a>
              </Link>
            </Flex>

            {!isSuccess && (
              <>
                <FormGroup>
                  <Label htmlFor="fullname">Nom complet</Label>
                  <Input
                    ref={register({ maxLength: 255, required: true })}
                    type="text"
                    name="fullname"
                    id="fullname"
                    error={!!errors.fullname}
                    placeholder="ex : John Doe"
                  />
                  {errors.fullname && (
                    <FormError>Merci de renseigner votre nom complet</FormError>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    ref={register({
                      maxLength: 255,
                      validate: validator.isEmail,
                    })}
                    type="text"
                    name="email"
                    placeholder="ex : john.doe@gmail.com"
                    id="email"
                    error={!!errors.email}
                  />
                  {errors.email && (
                    <FormError>Merci de renseigner un mail correct</FormError>
                  )}

                  {/* Field HoneyPot */}
                  <Input
                    ref={register}
                    type="text"
                    name="mail"
                    placeholder="ex : john.doe@gmail.com"
                    autoComplete="new-password"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    ref={register({ maxLength: 2000, required: true })}
                    name="message"
                    error={!!errors.message}
                    placeholder="ex : Bonjour, je souhaiterais un devis pour..."
                    id="message"
                  />
                  {errors.message && (
                    <FormError>
                      Merci de renseigner un message (2000 caractères maximum)
                    </FormError>
                  )}
                </FormGroup>
                <Flex
                  justifyContent="center"
                  style={{ width: "100%", marginTop: 20 }}
                >
                  <Button disabled={formSubmitted} type="submit">
                    Envoyer
                  </Button>
                </Flex>
                <Legal>
                  Vos informations sont utilisées uniquement afin que nous
                  puissions vous recontacter. Elle ne sont pas conservées.
                </Legal>{" "}
              </>
            )}
          </Flex>
        </Form>

        {isSuccess && (
          <FadeIn>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ height: "calc(100vh - 300px)", width: "100%" }}
            >
              <ThanksSuccess />
              <TitleSuccess>Merci !</TitleSuccess>
              <p>Nous vous recontacterons très prochainement !</p>

              <Button to="/" tag="link" style={{ marginTop: 20 }}>
                Retourner à l&apos;accueil
              </Button>
            </Flex>
          </FadeIn>
        )}
      </Container>
    </FadeIn>
  )
}

export default Contact
