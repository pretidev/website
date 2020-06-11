import MobileDetect from "mobile-detect"
import { DeviceType } from "../types"

export const getSizesFallback = (userAgent: string): DeviceType => {
  const md = new MobileDetect(userAgent)

  if (!!md.mobile()) {
    return "sm"
  } else if (!!md.tablet()) {
    return "md"
  }

  return "lg"
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
