import React, { ReactNode, FC } from "react"
import styled, { css } from "styled-components"
import Link from "next/link"

import { PropsWithTheme } from "../types"

import { media } from "../constants"

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

  &:disabled {
    opacity: 0.7;
  }

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

const LinkButton = styled.a`
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

export const Button: FC<ButtonProps> = ({
  children,
  tag = "button",
  to,
  ...props
}) => {
  if (tag === "link") {
    return (
      <Link href={to}>
        <LinkButton {...props}>{children}</LinkButton>
      </Link>
    )
  }

  if (tag === "button") {
    return <ButtonButton {...props}>{children}</ButtonButton>
  }

  return null
}
