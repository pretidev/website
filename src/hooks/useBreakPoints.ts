import { useState, useEffect, useCallback } from "react"
import { useWindowSizes } from "./useWindowSizes"
import { breakpoints } from "../constants"

export type DeviceType = "xs" | "sm" | "md" | "lg"

const getDeviceConfig = (width: number | undefined): DeviceType => {
  if (width === undefined) {
    return "sm"
  }

  console.log("width", width)
  if (width < breakpoints.sm) {
    return "xs"
  } else if (width >= breakpoints.sm && width < breakpoints.md) {
    return "sm"
  } else if (width >= breakpoints.md && width < breakpoints.lg) {
    return "md"
  } else if (width >= breakpoints.lg) {
    return "lg"
  }

  return "sm"
}

export const useBreakPoints = () => {
  const { width } = useWindowSizes()
  const [deviceType, setDeviceType] = useState<DeviceType>(() =>
    getDeviceConfig(width)
  )

  const isDeviceMin = useCallback(
    (device: DeviceType) => {
      switch (device) {
        case "xs":
          return true
        case "sm":
          return deviceType !== "xs"
        case "md":
          return deviceType === "md" || deviceType === "lg"
        case "lg":
          return deviceType === "lg"
      }
    },
    [deviceType]
  )

  const isDeviceMax = useCallback(
    (device: DeviceType) => {
      switch (device) {
        case "xs":
          return deviceType === "xs"
        case "sm":
          return deviceType === "xs" || deviceType === "sm"
        case "md":
          return deviceType !== "lg"
        case "lg":
          return true
      }
    },
    [deviceType]
  )

  useEffect(() => {
    setDeviceType(getDeviceConfig(width))
  }, [width])

  return { isDeviceMin, isDeviceMax, device: deviceType }
}
