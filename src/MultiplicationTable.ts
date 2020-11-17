export class MultiplicationTable {
  public render(start: number, end: number): string {
    const checkResult = checkInput(start, end)
    return checkResult === 'valid' ? writeMultiplicationTable(start, end) : checkResult
  }
}

function getSingleMultiplication(a: number, b: number, count: number): string {
  const ss = `${a}*${b}=${a * b}`
  const space = count - ss.length
  let spaceLine = ''
  for (let i = 0; i < space + 2; i++) {
    spaceLine += ' '
  }
  return ss + spaceLine
}

function writeMultiplicationTable(start: number, end: number): string {
  const lines = []
  let line = []

  for (let i = start; i <= end; i++) {

    for (let j = start; j <= i; j++) {
      const count = `${j}*${end}=${j * end}`.toString().length
      const single = getSingleMultiplication(j, i, count)
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
  return (start > 0 && start <= 10) && (end > 0 && end <= 10)
}
