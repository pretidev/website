import { useState, useEffect } from "react"
import { useWindowSizes } from "./useWindowSizes"
import { breakpoints } from "../constants"
import { DeviceType } from "../types"

type DeviceCallback = (device: DeviceType) => boolean

export interface UseBreakPointsReturn {
  isDeviceMin: DeviceCallback
  isDeviceMax: DeviceCallback
  device: DeviceType
}

const getDeviceConfig = (width: number | undefined): DeviceType => {
  if (width === undefined) {
    return "sm"
  }

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

export const isDeviceMin = (
  expectedDevice: DeviceType,
  currentDevice: DeviceType
): boolean => {
  switch (expectedDevice) {
    case "xs":
      return true
    case "sm":
      return currentDevice !== "xs"
    case "md":
      return currentDevice === "md" || currentDevice === "lg"
    case "lg":
      return currentDevice === "lg"
  }
}

export const isDeviceMax = (
  expectedDevice: DeviceType,
  currentDevice: DeviceType
): boolean => {
  switch (expectedDevice) {
    case "xs":
      return currentDevice === "xs"
    case "sm":
      return currentDevice === "xs" || currentDevice === "sm"
    case "md":
      return currentDevice !== "lg"
    case "lg":
      return true
  }
}

export const useBreakPoints = (): DeviceType => {
  const { width } = useWindowSizes()
  const [deviceType, setDeviceType] = useState<DeviceType>(() =>
    getDeviceConfig(width)
  )

  useEffect(() => {
    setDeviceType(getDeviceConfig(width))
  }, [width])

  return deviceType
}
