export class MultiplicationTable {
  public render(start: number, end: number): string {
    const checkResult = checkInput(start, end)
    return checkResult === 'valid' ? writeMultiplicationTable(start, end) : checkResult
  }
}

function getSingleMultiplication(a: number, b: number): string {
  return `${a}*${b}=${a * b}`
}

function writeMultiplicationTable(start: number, end: number): string {
  const lines = []
  let line = []

  for (let i = start; i <= end; i++) {
    for (let j = start; j <= i; j++) {
      const single = getSingleMultiplication(j, i)
      line.push(single)
    }

    lines.push(end === 10 && i !== 10 ? line.join('   ') : line.join('  '))
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
