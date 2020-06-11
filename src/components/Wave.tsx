import React, { useRef, useState, FC } from "react"
import { useWindowSizes } from "../hooks/useWindowSizes"
import { useTheme } from "styled-components"

import { AppTheme } from "../types"
import { drawWave } from "../services/drawWave"
import { useAnimationFrame } from "../hooks/useAnimationFrame"

interface WaveProps {
  accelerate?: boolean
  amplitude?: number
  length?: number
  animate?: boolean
}

export const Wave: FC<WaveProps> = ({
  amplitude = 120,
  length = 0.005,
  accelerate = false,
  animate = true,
}) => {
  const theme = useTheme() as AppTheme
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const { width, height } = useWindowSizes()

  const [lasIncrement, setLastIncrement] = useState(100)

  let increment = lasIncrement

  useAnimationFrame(() => {
    const canvas = canvasRef.current

    if (height && width && canvas) {
      const ctx = canvas?.getContext("2d") as CanvasRenderingContext2D

      canvas.height = height
      canvas.width = width

      const draw = () => {
        ctx.clearRect(0, 0, width, height)

        drawWave(
          ctx,
          width,
          height,
          length,
          accelerate ? 170 : amplitude,
          increment / (accelerate ? 10 : 100),
          theme.colors.home.wave
        )

        if (animate) increment++

        setLastIncrement(increment)
      }

      draw()
    }
  }, [width, height, accelerate])

  return <canvas ref={canvasRef} style={{ position: "absolute", zIndex: -1 }} />
}
