import styled, { css } from "styled-components"

type BaseFlexPosition = "center" | "flex-start" | "flex-end"
type JustifyPosition = BaseFlexPosition | "space-around" | "space-between"
type Direction = "column" | "row"

export interface FlexProps {
  alignItems?: BaseFlexPosition
  justifyContent?: JustifyPosition
  direction?: Direction
  flex?: string
}

export const Flex = styled.div<FlexProps>`
  display: flex;

  ${({ justifyContent, alignItems, direction, flex }) => css`
    justify-content: ${justifyContent || "flex-start"};
    align-items: ${alignItems || "flex-start"};
    flex-direction: ${direction || "row"};
    flex: ${flex || "auto"};
  `}
`
