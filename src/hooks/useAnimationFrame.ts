import { useRef, useEffect, DependencyList } from "react"

export type AnimationFrameCallback = (deltaTime: number) => any

export const useAnimationFrame = (
  callback: AnimationFrameCallback,
  deps?: DependencyList | undefined
): void => {
  const requestRef = useRef<number | undefined>()
  const previousTimeRef = useRef<number | undefined>()

  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef?.current

      callback(deltaTime)
    }

    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, deps)
}
