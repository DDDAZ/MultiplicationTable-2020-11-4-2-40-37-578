export class MultiplicationTable {
  public render(start: number, end: number): string {
    checkInput(start, end)
    return writeMultiplicationTable(start, end)
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

    lines.push(line.join('  '))
    line = []
  }

  return lines.join('\n')
}

function checkInput(start: number, end: number): boolean {
  return isStartSmallerThanEnd(start, end) !== ''
}

function isStartSmallerThanEnd(start: number, end: number): string {
  return start > end ? '' : 'valid'
}
