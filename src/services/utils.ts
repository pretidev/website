export const nbArray = (length: number): number[] => [
  ...new Array(length).keys(),
]

export const range = (start: number, end: number): number[] =>
  nbArray(end - start).map(i => i + start)
