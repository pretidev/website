import styled from "styled-components"

import { media } from "../constants"

import WaveSvg from "../assets/svg/wave.svg"

export const MobileWave = styled.div`
  ${media.max("md")} {
    background: url("${WaveSvg}");
    width: 100%;
    height: 395px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`
