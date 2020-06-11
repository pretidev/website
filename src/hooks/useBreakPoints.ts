import { useState, useEffect, useContext } from "react"
import { useWindowSizes } from "./useWindowSizes"
import { breakpoints } from "../constants"
import { DeviceType } from "../types"
import AppContext from "../contexts/appContext"

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

export const useBreakPoints = (): DeviceType => {
  const { width } = useWindowSizes()
  const { deviceType: initialDeviceType } = useContext(AppContext)
  const [deviceType, setDeviceType] = useState<DeviceType>(initialDeviceType)

  useEffect(() => {
    setDeviceType(getDeviceConfig(width))
  }, [width])

  return deviceType
}
