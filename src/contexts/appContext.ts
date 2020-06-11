import { createContext } from "react"

import { DeviceType } from "../types"

export interface AppContextInterface {
  deviceType: DeviceType
  setDeviceType: (deviceType: DeviceType) => any
}

export const initContext: AppContextInterface = {
  deviceType: "sm",
  setDeviceType: () => undefined,
}

export default createContext<AppContextInterface>(initContext)
