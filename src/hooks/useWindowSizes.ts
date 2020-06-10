import { useEffect, useState } from "react"
import throttle from "lodash.throttle"

export const useWindowSizes = () => {
  const isClient = typeof window === "object"

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return
    }

    const handleResize = throttle(() => {
      setWindowSize(getSize())
    }, 100)

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return windowSize
}
