export const sumCoefficient = (num) => {
  if (num > 1000000000) {
    return Number(num / 1000000000).toFixed(2) + 'B'
  } else if (num > 1000000) {
    return Number(num / 1000000).toFixed(2) + 'M'
  }
  return num
}
