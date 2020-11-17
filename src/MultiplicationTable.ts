export class MultiplicationTable {
  public render(start: number, end: number): string {
    const checkResult = checkInput(start, end)
    return checkResult === 'valid' ? writeMultiplicationTable(start, end) : checkResult
  }
}

function getSingleMultiplication(a: number, b: number, count: number): string {
  const single = `${a}*${b}=${a * b}`
  const gap = ' '.repeat(count - single.length + 2)
  return single + gap
}

function writeMultiplicationTable(start: number, end: number): string {
  const lines = []
  let line = []

  for (let i = start; i <= end; i++) {
    for (let k = start; k <= i; k++) {
      const count = `${k}*${end}=${k * end}`.toString().length
      const single = getSingleMultiplication(k, i, count)
      line.push(single)
    }

    lines.push(line.join('').trim())
    line = []
  }

  return lines.join('\n')
}

function checkInput(start: number, end: number): string {
  if (isStartSmallerThanEnd(start, end)) {
    return isInRange10(start, end) ? 'valid' : 'out of range'
  }
  return ''
}

function isStartSmallerThanEnd(start: number, end: number): boolean {
  return start <= end
}

function isInRange10(start: number, end: number): boolean {
  return !(start < 1 || start > 10 || end < 1 || end > 10)
}
