export type Point = [number, number]
export type CubicBezier = [number, number, number, number, number, number]

export const drawWave = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  length: number,
  amplitude: number,
  animation: number,
  color: string
): void => {
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(width / 3, 0)

  let j = 0
  let i = width / 3

  while (i < width) {
    const y =
      j +
      Math.sin(j * length + animation) * (amplitude * Math.sin(animation)) -
      amplitude

    ctx.lineTo(i, y)

    j++
    i++
  }

  ctx.lineTo(width, height)
  ctx.lineTo(width, 0)
  ctx.closePath()
  ctx.fill()
}
