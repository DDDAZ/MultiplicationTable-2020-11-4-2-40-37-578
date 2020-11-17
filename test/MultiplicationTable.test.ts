import { MultiplicationTable } from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe(`2*2=4
2*3=6  3*3=9
2*4=8  3*4=12  4*4=16`)
  })

  it('should return nothing of (4, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 4
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  it('should return nothing of (0, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 0
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('out of range')
  })

  it('should return correct table of (8, 10)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 8
    const end = 10

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe(`8*8=64
8*9=72   9*9=81
8*10=80  9*10=90  10*10=100`)
  })
})
