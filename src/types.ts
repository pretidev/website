export interface AppTheme {
  colors: {
    common: {
      primary: string
      darkPrimary: string
      secondary: string
      darkSecondary: string
      text: string
      white: string
    }
    home: {
      bg: string
      wave: string
    }
  }
}

export type DeviceType = "xs" | "sm" | "md" | "lg"

export interface Dictionary<T extends any = any> {
  [key: string]: T
}

export type PropsWithTheme<P extends Dictionary = Dictionary> = P & {
  theme: AppTheme
}
