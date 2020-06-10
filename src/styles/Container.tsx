import styled from "styled-components"

export interface ContainerProps {
  width?: string
}

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width || "1200px"};
  max-width: 100%;
  padding: 0 20px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`
