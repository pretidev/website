import { AppTheme, DeviceType } from "./types"

export const COLORS = {
  white: "#FFFFFF",
  lightBlue: "#F2FAFF",
  blue: "#D3EEFF",
  orange: "#FF5F2E",
  darkOrange: "#e63802",
  black: "#00222D",
}

export const defaultTheme: AppTheme = {
  colors: {
    common: {
      primary: COLORS.orange,
      darkPrimary: COLORS.darkOrange,
      secondary: COLORS.lightBlue,
      darkSecondary: COLORS.blue,
      text: COLORS.black,
      white: COLORS.white,
    },
    home: {
      bg: COLORS.lightBlue,
      wave: COLORS.blue,
    },
  },
}

export const breakpoints = {
  sm: 320,
  md: 768,
  lg: 1200,
}

type MediaDeviceType = Exclude<DeviceType, "xs">

export const media = {
  min: (deviceType: MediaDeviceType): string =>
    `@media screen and (min-width: ${breakpoints[deviceType]}px)`,
  max: (deviceType: MediaDeviceType): string =>
    `@media screen and (max-width: ${breakpoints[deviceType]}px)`,
}
