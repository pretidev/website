import React, { ReactNode } from "react"
import styled, { css } from "styled-components"

import { PropsWithTheme } from "../types"

import { media } from "../constants"
import { Link } from "gatsby"

const style = css`
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 50px;
  padding: 18px 40px;
  font-size: 1.8rem;
  line-height: 2.6rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  text-decoration: none;

  ${({ theme }: PropsWithTheme) => css`
    color: ${theme.colors.common.white};
    background: ${theme.colors.common.primary};

    &:hover {
      background: ${theme.colors.common.darkPrimary};

      &:focus {
        box-shadow: 0 0px 0px 3px ${theme.colors.common.white},
          0 0px 0px 5px ${theme.colors.common.darkPrimary};
      }
    }

    &:focus {
      box-shadow: 0 0px 0px 3px ${theme.colors.common.white},
        0 0px 0px 5px ${theme.colors.common.primary};
    }
  `};

  ${media.max("md")} {
    padding: 15px 30px;
    font-size: 1.6rem;
  }
`

const LinkButton = styled(Link)`
  ${style}
`

const ButtonButton = styled.button`
  ${style}
`

interface BaseButtonProps {
  children?: ReactNode
  [k: string]: any
}

interface ButtonButtonProps extends BaseButtonProps {
  tag?: "button"
}

interface LinkButtonProps extends BaseButtonProps {
  tag: "link"
  to: string
}

type ButtonProps = ButtonButtonProps | LinkButtonProps

export const Button = ({
  children,
  tag = "button",
  to,
  ...props
}: ButtonProps) => {
  if (tag === "link") {
    return (
      <LinkButton to={to} {...props}>
        {children}
      </LinkButton>
    )
  }

  if (tag === "button") {
    return <ButtonButton {...props}>{children}</ButtonButton>
  }

  return null
}
