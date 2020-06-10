export const nbArray = (length: number) => [...Array(length).keys()]

export const range = (start: number, end: number) =>
  nbArray(end - start).map(i => i + start)
